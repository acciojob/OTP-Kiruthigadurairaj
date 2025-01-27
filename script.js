//your JS code here. If required.
  document.addEventListener("DOMContentLoaded", () => {
            const inp = document.querySelectorAll('.code');

            inp.forEach((txt, index) => {
                txt.addEventListener('input', (e) => {
                    if (e.target.value.length === 1 && index < inp.length - 1) {
                        inp[index + 1].focus();
                    }
                });

                txt.addEventListener('keydown', (e) => {
                    if (e.key === "Backspace" && index > 0 && e.target.value === '') {
                        inp[index - 1].focus();
                    }
                });
            });
        });