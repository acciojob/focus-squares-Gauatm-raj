//your JS code here. If required.
        document.addEventListener('DOMContentLoaded', function() {
            const squares = document.querySelectorAll('.square');

            squares.forEach((square, index) => {
                square.addEventListener('mouseenter', () => {
                    console.log(`Mouse entered square ${index + 1}`);
                    squares.forEach((sq, i) => {
                        if (i !== index) {
                            sq.style.backgroundColor = '#6F4E37'; // Coffee
                            console.log(`Square ${i + 1} color changed to Coffee`);
                        }
                    });
                });

                square.addEventListener('mouseleave', () => {
                    console.log(`Mouse left square ${index + 1}`);
                    squares.forEach(sq => {
                        sq.style.backgroundColor = '#E6E6FA'; // Lavender
                        console.log(`Square color reset to Lavender`);
                    });
                });
            });
        });