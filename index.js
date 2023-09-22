import files from './files.json' assert {type: 'json'};

const main = document.querySelector('.main');

for (const file of files) {
    const { name, source } = file;
    const path = 'files/' + name + '/';
    const firsImagePath = `${path}frame-0.png`;

    const gallery = document.createElement('a');
    gallery.className = 'gallery';
    gallery.setAttribute('data-fancybox', 'gallery' + name);
    gallery.setAttribute('href', firsImagePath);

    const img = document.createElement('img');
    img.src = firsImagePath;
    gallery.append(img);

    source
        .sort((a, b) => Number(a.replace(/frame-(\d+).png/gi, '$1')) - Number(b.replace(/frame-(\d+).png/gi, '$1')))
        .forEach((imageSrc, index) => {
            if (index !== 0) {
                const a = document.createElement('a');
                a.setAttribute('data-fancybox', 'gallery' + name);
                a.setAttribute('href', path + '/' + imageSrc);
                gallery.append(a);
            }
        })

    main.append(gallery);
}


Fancybox.bind("[data-fancybox]", {
    // Your custom options
});