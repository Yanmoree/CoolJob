
window.onclick = (event) => {
    ['id01', 'id02'].forEach(id => {
      const modal = document.getElementById(id);
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };
  