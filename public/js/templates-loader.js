const templateLoader = (() => {
    const cache = {};


    function get(templateName) {
        return new Promise((resolve, reject) => {
            if (cache[templateName]) {
                resolve(cache[templateName]);
                // Кешираме да не прави нова заявка
            } else {
                $.get(`/js/templates/${templateName}.handlebars`)
                    .done((data) => {
                        let compiledTemplate = Handlebars.compile(data);
                        cache[templateName] = compiledTemplate;
                        resolve(compiledTemplate);
                    })
                    .fail(reject);
            }
        })
    }

    return {
        get
    }
})();

export { templateLoader };
