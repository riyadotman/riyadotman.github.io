document.addEventListener('DOMContentLoaded', function() {
    const skillsInfo = {
        'html': 'HTML is the standard markup language for creating Web pages. It describes the structure of a Web page.',
        'css': 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
        'react': 'React is a JavaScript library for building user interfaces. It allows us to create reusable UI components.',
        'js': 'JavaScript is the programming language of the Web. It is used to program the behavior of web pages.'
    };

    document.querySelectorAll('img[alt="html"], img[alt="css"], img[alt="react"], img[alt="js"]').forEach(img => {
        img.addEventListener('click', () => {
            const skillKey = img.alt.toLowerCase();
            let info = 'Information not available';

            switch (skillKey) {
                case 'html':
                    info = skillsInfo['html'];
                    break;
                case 'css':
                    info = skillsInfo['css'];
                    break;
                case 'react':
                    info = skillsInfo['react'];
                    break;
                case 'js':
                    info = skillsInfo['js'];
                    break;
                default:
                    console.log('No information available for this skill.');
            }

            alert(info);
        });
    });
});


