// Select all paper elements
const papers = document.querySelectorAll('.paper');

papers.forEach(paper => {
  let isDragging = false;
  let startX, startY, initialX, initialY;

  paper.addEventListener('touchstart', function (e) {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    const rect = paper.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;

    // Bring the dragged element to the top
    paper.style.zIndex = Date.now();
    paper.style.position = 'absolute';
  });

  paper.addEventListener('touchmove', function (e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    paper.style.left = `${initialX + dx}px`;
    paper.style.top = `${initialY + dy}px`;
  });

  paper.addEventListener('touchend', function () {
    isDragging = false;
  });
});
