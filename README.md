# 🍔 OmliburGuer - Menú de Hamburguesas

Una aplicación web completa para gestionar el menú de tu local de hamburguesas con capacidad de edición en tiempo real.

## ✨ Características

✅ **Menú interactivo** con dos categorías:
- 🍔 Hamburguesas
- 🥤 Bebidas

✅ **Editar productos**:
- Cambiar nombre
- Modificar descripción
- Actualizar precio
- Agregar/cambiar imagen

✅ **Agregar productos** nuevos fácilmente

✅ **Eliminar productos** que ya no venda

✅ **Imágenes personalizadas** con vista previa

✅ **Guardado automático** en el navegador (localStorage)

✅ **Diseño responsivo** (funciona en móvil, tablet y PC)

## 🚀 Cómo usar

1. **Abre el archivo `index.html`** en tu navegador web
   - Simplemente haz doble clic en el archivo
   - O abre tu navegador y arrastra el archivo hacia él

2. **Navega por el menú**:
   - Haz clic en "Hamburguesas" o "Bebidas" para cambiar de categoría

3. **Editar un producto**:
   - Haz clic en el botón "✏️ Editar" en cualquier producto
   - Modifica el nombre, descripción, precio e imagen
   - Haz clic en "Guardar"

4. **Agregar un producto nuevo**:
   - Haz clic en "+ Agregar Hamburguesa" o "+ Agregar Bebida"
   - Completa los datos del nuevo producto
   - Haz clic en "Guardar"

5. **Eliminar un producto**:
   - Abre el modal de edición del producto
   - Haz clic en el botón "Eliminar"
   - Confirma la eliminación

## 🖼️ Agregar imágenes

Puedes agregar imágenes de dos formas:

### Opción 1: URLs de imagen (más fácil)
- Busca una imagen en Google Imágenes
- Haz clic derecho → "Copiar enlace de imagen"
- Pega la URL en el campo "URL de Imagen"
- La preview te mostrará la imagen

### Opción 2: Imágenes locales (más profesional)
1. Coloca las imágenes en la carpeta `images/`
2. En el campo de imagen, escribe: `images/nombre-imagen.jpg`
3. Asegúrate de que el nombre del archivo sea correcto

**Sitios recomendados para obtener imágenes:**
- 🔗 [Unsplash](https://unsplash.com) - Imágenes gratis de calidad
- 🔗 [Pexels](https://pexels.com) - Imágenes libres de derechos
- 🔗 [Pixabay](https://pixabay.com) - Banco de imágenes
- 🔗 [Freepik](https://freepik.com) - Imágenes profesionales

## 💾 Guardado de datos

- Los cambios se guardan **automáticamente** en tu navegador
- Los datos persisten aunque cierres el navegador
- Para limpiar los datos, abre las DevTools (F12) y borra el localStorage

## 📱 Compatibilidad

- ✅ Chrome / Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Navegadores móviles

## 🎨 Personalización

Si deseas cambiar los colores o estilos, edita el archivo `css/style.css`. 
Las variables de color están definidas en la parte superior:

```css
:root {
    --color-primary: #ff6b35;      /* Naranja (botones, títulos) */
    --color-secondary: #f7931e;    /* Naranja claro (precios) */
}
```

## 📝 Ejemplos de URLs de imágenes

```
https://images.unsplash.com/photo-1550547990-5a0a9f50ffa8?w=300&h=200&fit=crop
https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop
```

## ⚠️ Notas importantes

- Asegúrate de que todas las URLs de imágenes sean accesibles (que el sitio permita acceso)
- Si una imagen no carga, verás un emoji 🍔 en su lugar
- Los nombres de productos no pueden estar vacíos
- El precio debe ser un número válido

## 🎯 Próximas mejoras (sugerencias)

- Agregar carrito de compras
- Integrar con plataformas de delivery
- Agregar historial de cambios
- Exportar menú en PDF
- Sistema de descuentos

---

¡Espero que disfrutes usando OmliburGuer! 🍔🥤
