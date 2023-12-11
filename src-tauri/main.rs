// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::path::PathBuf;
use image::{DynamicImage, GenericImageView};
use std::fs;
use open::that;
use std::fs::File;
use std::fs::canonicalize;


#[tauri::command]
async fn get_image_dimensions(image_buffer: Vec<u8>) -> Result<(u32, u32), String> {
    // Use `image` to get the dimensions of the image from the buffer
    let image = image::load_from_memory(&image_buffer).map_err(|e| e.to_string())?;
    let dimensions = image.dimensions();
    Ok(dimensions)
}




#[tauri::command]
fn image_resize(img_path: String, height: u32, width: u32, dest: String, nameimage: String) -> Result<(), String> {
    println!("Redimensionando imagen...");
    println!("img_path: {}", img_path);
    println!("height: {}", height);
    println!("width: {}", width);
    println!("dest: {}", dest);
    println!("nameimage: {}", nameimage);

    // Cargar la imagen existente
    let img = match image::open(&img_path) {
        Ok(img) => img,
        Err(_) => return Err("Error al abrir la imagen existente".to_string()),
    };

    // Crear una nueva imagen redimensionada
    let resized_img = img.resize_exact(width, height, image::imageops::FilterType::Triangle);

    // Verificar si la carpeta de destino existe, y si no, crearla
    if let Err(_) = fs::create_dir_all(&dest) {
        return Err("Error al crear la carpeta de destino".to_string());
    }

    // Construir la ruta completa de destino con el nombre de la imagen proporcionado
    let dest_path = format!("{}/{}", dest, nameimage);
    
    // Guardar la nueva imagen en la ruta de destino
    match resized_img.save(&dest_path) {
        Ok(_) => {
            println!("Imagen redimensionada y guardada con éxito en: {}", dest_path);
            
            // Abrir el directorio después de guardar la imagen
            if let Err(err) = that(dest) {
                eprintln!("Error al abrir el directorio: {:?}", err);
            }
            
            Ok(())
        }
        Err(err) => {
            eprintln!("Error al guardar la nueva imagen: {:?}", err);
            Err("Error al guardar la nueva imagen".to_string())
        }
    }
}


#[tauri::command]
fn get_file_path(fne: String) -> Result<String, String> {
    // Obtener el directorio de trabajo actual
    let current_dir = std::env::current_dir()
        .map_err(|_| "Error al obtener el directorio de trabajo".to_string())?;

    // Construir la ruta completa al archivo
    let full_path = current_dir.join(&fne);

    // Verificar si el archivo existe
    if fs::metadata(&full_path).is_ok() {
        // El archivo existe, ahora intentar canonicalizar la ruta
        let canonical_path = full_path.canonicalize()
            .map_err(|err| {
                eprintln!("Error al obtener la ruta canónica del archivo: {:?}", err);
                "Error al obtener la ruta canónica del archivo".to_string()
            })?;

        Ok(canonical_path.to_string_lossy().to_string())
    } else {
        Err("El archivo no existe en la ruta especificada".to_string())
    }
}


// Your actual image resizing logic goes here

#[tauri::command]
fn oshomedir() -> Result<String, String> {
    
    let homedir = dirs::home_dir();
    match homedir {
        Some(path) => Ok(path.to_str().unwrap().to_string()),
        None => Err("Error al obtener el directorio principal".to_string()),
    }
}
#[tauri::command]
fn get_output_path(oshomedir: String) -> Result<String, String> {
    let homedir = PathBuf::from(oshomedir);
    let output_path = homedir.join("imagen_univo");
    
    Ok(output_path.to_str().unwrap().to_string())
}




#[tauri::command]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            oshomedir,
            get_output_path,
            image_resize,
            get_file_path,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}