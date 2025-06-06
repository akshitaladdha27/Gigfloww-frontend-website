function showPage(pageId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  alert(`Switching to page: ${page}`);

  // Reset sub-pages on home switch
  if (pageId === 'home') {
    document.querySelectorAll('.sub-page').forEach(p => p.style.display = 'none');
  }
}

function showSubPage(subId) {
  document.querySelectorAll('.sub-page').forEach(p => p.style.display = 'none');
  document.getElementById(subId).style.display = 'block';
}

function redirectTo(url) {
  window.location.href = url;
}


