        lucide.createIcons();

        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#051611]/95');
            } else {
                nav.classList.remove('bg-[#051611]/95');
            }
        });