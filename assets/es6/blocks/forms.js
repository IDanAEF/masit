const forms = () => {
    async function postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
    
        return await res.text();
    }

    const resetForm = (form, blocks) => {
        form.reset();

        blocks.forEach(item => item.classList.remove('active'));
    }

    try {
        const formBlock = document.querySelectorAll('.form_block');

        formBlock.forEach(block => {
            const blockInp = block.querySelector('input, textarea');

            if (block.classList.contains('label-top')) {
                blockInp.addEventListener('focus', () => {
                    block.classList.add('active');
                });

                blockInp.addEventListener('blur', () => {
                    if (!blockInp.value) {
                        block.classList.remove('active');
                    }
                });
            } else if (block.classList.contains('checkbox')) {
                blockInp.addEventListener('change', () => {
                    block.classList.toggle('active');
                });
            }
        });
    } catch (e) {
        console.log(e.stack);
    }

    /* ---- mail send ----> */
    
    try {
        const messBlock = document.querySelector('#message'),
              messForm = messBlock.querySelector('form');

        messForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(messForm);

            postData('mail.php', formData)
            .then(() => {
                messBlock.querySelector('.wrap').classList.remove('active');
                messBlock.querySelector('.wrap.success').classList.add('active');
                resetForm(messForm, messForm.querySelectorAll('.form_block'));
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default forms;