document.addEventListener('DOMContentLoaded', function() {
    const mainImageContainer = document.getElementById('main-image-container');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Check if the first thumbnail is a video thumbnail
    const firstThumbnail = thumbnails[0];
    if (firstThumbnail.classList.contains('video-thumbnail')) {
        const videoUrl = firstThumbnail.getAttribute('data-video');
        mainImageContainer.innerHTML = `<iframe width="500" height="300" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        const imgSrc = firstThumbnail.getAttribute('src');
        mainImageContainer.innerHTML = `<img id="main-image" src="${imgSrc}" alt="Main Image">`;
    }

    // Add click event listeners to all thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            if (thumbnail.classList.contains('video-thumbnail')) {
                const videoUrl = thumbnail.getAttribute('data-video');
                mainImageContainer.innerHTML = `<iframe width="500" height="300" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                const imgSrc = thumbnail.getAttribute('src');
                mainImageContainer.innerHTML = `<img id="main-image" src="${imgSrc}" alt="Main Image">`;
            }
        });
    });
});