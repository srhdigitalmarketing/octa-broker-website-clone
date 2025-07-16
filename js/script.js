// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeModal();
    initializeImageErrorHandling();
    initializeResponsiveFeatures();
});

// Modal Functionality
function initializeModal() {
    try {
        const modal = document.getElementById('geo-modal');
        const mainContent = document.getElementById('main-content');
        const confirmBtn = document.getElementById('confirm-btn');
        const cancelBtn = document.getElementById('cancel-btn');

        // Check if user has already confirmed (using localStorage)
        const hasConfirmed = localStorage.getItem('octa-geo-confirmed');
        
        if (hasConfirmed === 'true') {
            hideModal();
            return;
        }

        // Show modal on page load
        showModal();

        // Confirm button event listener
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function() {
                try {
                    // Set confirmation in localStorage
                    localStorage.setItem('octa-geo-confirmed', 'true');
                    hideModal();
                } catch (error) {
                    console.error('Error saving confirmation:', error);
                    hideModal(); // Still hide modal even if localStorage fails
                }
            });
        }

        // Cancel button event listener
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function() {
                try {
                    // You could redirect to a different page or show an error message
                    // For now, we'll just hide the modal and show a message
                    alert('Anda harus mengonfirmasi untuk melanjutkan menggunakan situs ini.');
                    // Optionally redirect to another page
                    // window.location.href = 'https://www.google.com';
                } catch (error) {
                    console.error('Error handling cancel:', error);
                }
            });
        }

        // Close modal when clicking outside (optional)
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                // Don't close modal when clicking outside for this use case
                // as it's a required confirmation
            }
        });

        // Prevent modal from closing with Escape key for required confirmation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                // Don't close modal with Escape for required confirmation
                e.preventDefault();
            }
        });

        function showModal() {
            if (modal && mainContent) {
                modal.style.display = 'flex';
                mainContent.style.display = 'none';
                
                // Focus management for accessibility
                const firstFocusableElement = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (firstFocusableElement) {
                    setTimeout(() => firstFocusableElement.focus(), 100);
                }
                
                // Prevent body scroll when modal is open
                document.body.style.overflow = 'hidden';
            }
        }

        function hideModal() {
            if (modal && mainContent) {
                modal.style.display = 'none';
                mainContent.style.display = 'block';
                
                // Restore body scroll
                document.body.style.overflow = '';
            }
        }

    } catch (error) {
        console.error('Error initializing modal:', error);
        // If there's an error, show the main content anyway
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.classList.remove('hidden');
        }
    }
}

// Image Error Handling
function initializeImageErrorHandling() {
    try {
        const images = document.querySelectorAll('img');
        
        images.forEach(function(img) {
            img.addEventListener('error', function() {
                try {
                    // Create a fallback element
                    const fallback = document.createElement('div');
                    fallback.className = 'img-error';
                    fallback.textContent = 'Gambar tidak dapat dimuat';
                    fallback.style.width = img.offsetWidth + 'px' || '200px';
                    fallback.style.height = img.offsetHeight + 'px' || '100px';
                    
                    // Replace the broken image with fallback
                    if (img.parentNode) {
                        img.parentNode.replaceChild(fallback, img);
                    }
                } catch (error) {
                    console.error('Error handling image error:', error);
                }
            });

            // Set loading attribute for better performance
            img.loading = 'lazy';
        });
    } catch (error) {
        console.error('Error initializing image error handling:', error);
    }
}

// Responsive Features
function initializeResponsiveFeatures() {
    try {
        // Mobile navigation toggle (if needed in future)
        handleMobileNavigation();
        
        // Smooth scrolling for anchor links
        initializeSmoothScrolling();
        
        // Handle window resize events
        handleWindowResize();
        
    } catch (error) {
        console.error('Error initializing responsive features:', error);
    }
}

// Mobile Navigation Handler
function handleMobileNavigation() {
    try {
        // This function can be expanded if mobile hamburger menu is needed
        const nav = document.querySelector('.nav');
        
        if (window.innerWidth <= 768 && nav) {
            // Add mobile-specific classes or behavior if needed
            nav.classList.add('mobile-nav');
        }
    } catch (error) {
        console.error('Error handling mobile navigation:', error);
    }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    try {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                try {
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (error) {
                    console.error('Error with smooth scrolling:', error);
                }
            });
        });
    } catch (error) {
        console.error('Error initializing smooth scrolling:', error);
    }
}

// Window Resize Handler
function handleWindowResize() {
    try {
        let resizeTimer;
        
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                try {
                    // Handle responsive adjustments
                    handleMobileNavigation();
                    
                    // Recalculate any dynamic layouts if needed
                    adjustLayoutForScreenSize();
                    
                } catch (error) {
                    console.error('Error handling window resize:', error);
                }
            }, 250);
        });
    } catch (error) {
        console.error('Error setting up resize handler:', error);
    }
}

// Layout Adjustments
function adjustLayoutForScreenSize() {
    try {
        const screenWidth = window.innerWidth;
        
        // Adjust grid layouts for different screen sizes
        const grids = document.querySelectorAll('.features-grid, .awards-grid, .investment-grid');
        
        grids.forEach(function(grid) {
            if (screenWidth <= 480) {
                grid.style.gridTemplateColumns = '1fr';
            } else if (screenWidth <= 768) {
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                grid.style.gridTemplateColumns = '';
            }
        });
    } catch (error) {
        console.error('Error adjusting layout:', error);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Form Validation (if forms are added later)
function validateForm(formElement) {
    try {
        const inputs = formElement.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    } catch (error) {
        console.error('Error validating form:', error);
        return false;
    }
}

// Analytics and Tracking (placeholder for future implementation)
function trackUserInteraction(action, element) {
    try {
        // This function can be used to track user interactions
        // for analytics purposes (Google Analytics, etc.)
        console.log('User interaction:', action, element);
        
        // Example: gtag('event', action, { element: element });
    } catch (error) {
        console.error('Error tracking user interaction:', error);
    }
}

// Performance Monitoring
function monitorPerformance() {
    try {
        // Monitor page load performance
        window.addEventListener('load', function() {
            const loadTime = performance.now();
            console.log('Page loaded in:', loadTime, 'ms');
            
            // Track performance metrics if needed
            if (loadTime > 3000) {
                console.warn('Page load time is slow:', loadTime, 'ms');
            }
        });
    } catch (error) {
        console.error('Error monitoring performance:', error);
    }
}

// Initialize performance monitoring
monitorPerformance();

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeModal,
        initializeImageErrorHandling,
        validateForm,
        debounce
    };
}
