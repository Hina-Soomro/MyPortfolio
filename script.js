.perspective {
    perspective: 1000px;
}

.card-3d {
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
}

.card-3d:hover {
    transform: rotateY(10deg) rotateX(5deg) translateZ(20px);
}

.skill-bar {
    background-color: #e5e7eb;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
}

.skill-progress {
    background: linear-gradient(to right, #4f46e5, #e11d48);
    height: 100%;
    transition: width 1s ease-in-out;
}

.btn-primary {
    background: linear-gradient(to right, #4f46e5, #e11d48);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
    background: linear-gradient(to right, #6b7280, #4b5563);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.scroll-indicator {
    width: 30px;
    height: 50px;
    border: 2px solid #4f46e5;
    border-radius: 25px;
    position: relative;
}

.scroll-indicator::before {
    content: '';
    width: 6px;
    height: 10px;
    background: #4f46e5;
    border-radius: 3px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 1.5s infinite;
}

@keyframes scroll {
    0% { transform: translateX(-50%) translateY(0); opacity: 1; }
    100% { transform: translateX(-50%) translateY(20px); opacity: 0; }
}

.floating-element {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}

.dropdown-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.dropdown-menu.open {
    max-height: 400px; /* Adjust based on content height */
}
