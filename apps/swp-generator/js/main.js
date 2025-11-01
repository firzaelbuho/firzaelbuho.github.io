document.addEventListener('DOMContentLoaded', function () {
    const resolutionWidthInput = document.getElementById('resolution_width');
    const resolutionHeightInput = document.getElementById('resolution_height');
    const colorInput = document.getElementById('color');
    const colorPreview = document.querySelector('.color-preview');
    const generateButton = document.getElementById('generate');
    const wallpaperCanvas = document.getElementById('wallpaper');
    const downloadLink = document.getElementById('download-link');
  
    colorInput.addEventListener('input', function () {
      colorPreview.style.backgroundColor = colorInput.value;
    });
  
    generateButton.addEventListener('click', function () {
      const width = parseInt(resolutionWidthInput.value);
      const height = parseInt(resolutionHeightInput.value);
      const color = colorInput.value;
  
      wallpaperCanvas.width = width;
      wallpaperCanvas.height = height;
      const ctx = wallpaperCanvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
  
      wallpaperCanvas.style.display = 'block';
  
      // Convert canvas to data URL and update download link
      const dataURL = wallpaperCanvas.toDataURL('image/png');
      downloadLink.href = dataURL;
      downloadLink.style.display = 'block';
    });
  });
  