// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Event Handling
    const colorChanger = document.getElementById('colorChanger');
    const hoverBox = document.querySelector('.hover-box');
    const keypressMessage = document.getElementById('keypressMessage');
    const secretTrigger = document.querySelector('.secret-trigger');
    const secretMessage = document.querySelector('.secret-message');

    // Color Changing Button
    let isPurple = false;
    colorChanger.addEventListener('click', () => {
        isPurple = !isPurple;
        colorChanger.style.backgroundColor = isPurple ? '#6f42c1' : '#007bff';
    });

    // Hover Effect
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = '#ffe066';
        hoverBox.textContent = 'Wheee! 🚀';
    });

    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = '#f8f9fa';
        hoverBox.textContent = 'Hover Over Me! ✈';
    });

    // Keypress Detection
    document.addEventListener('keydown', (e) => {
        keypressMessage.textContent = `You pressed: ${e.key.toUpperCase()}`;
        setTimeout(() => {
            keypressMessage.textContent = 'Press any key... 🎹';
        }, 1000);
    });

    // Secret Double Click
    secretTrigger.addEventListener('dblclick', () => {
        secretMessage.textContent = '🎉 You found the secret message!';
    });

    // Image Gallery
    const images = [
        'https://picsum.photos/400/300?image=0',
        'https://picsum.photos/400/300?image=1',
        'https://picsum.photos/400/300?image=2'
    ];
    let currentImage = 0;
    const slideshowImg = document.querySelector('.slideshow img');

    document.querySelector('.next').addEventListener('click', () => {
        currentImage = (currentImage + 1) % images.length;
        slideshowImg.src = images[currentImage];
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
        slideshowImg.src = images[currentImage];
    });

    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabNumber = tab.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
                if(content.dataset.tab === tabNumber) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Form Validation
    const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const validateName = () => {
        const isValid = nameInput.value.trim().length > 0;
        nameInput.nextElementSibling.textContent = isValid ? '' : 'Name is required';
        return isValid;
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailInput.value);
        emailInput.nextElementSibling.textContent = isValid ? '' : 'Invalid email format';
        return isValid;
    };

    const validatePassword = () => {
        const isValid = passwordInput.value.length >= 8;
        passwordInput.nextElementSibling.textContent = isValid ? '' : 'Password must be at least 8 characters';
        return isValid;
    };

    // Real-time Validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isFormValid = validateName() & validateEmail() & validatePassword();
        if(isFormValid) {
            alert('Form submitted successfully! ✈');
            form.reset();
            document.querySelectorAll('.error').forEach(error => error.textContent = '');
        }
    });
});