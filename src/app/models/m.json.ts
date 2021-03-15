/**
 * Archivo que contiene los JSON por defecto
 */

// Funcion para un header por defecto
export function M_HEADER() {
  return {
    "content-type": "application/json",
  }
}

// Funcion para variables globales
export function M_GLOBAL() {
  return {
    "URL": "https://localhost.com",
    "ENDPOINT": "/endpoint/second-path",
  }
}