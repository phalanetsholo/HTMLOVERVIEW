const submitButton = document.getElementById('submitPost');
        const postContent = document.getElementById('postContent');
        const fileInput = document.getElementById('fileInput');
        const feed = document.getElementById('feed');

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            const content = postContent.value.trim();
            const file = fileInput.files[0];

            if (content || file) {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                if (content) {
                    const postText = document.createElement('p');
                    postText.textContent = content;
                    postDiv.appendChild(postText);
                }

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const postImage = document.createElement('img');
                        postImage.src = e.target.result;
                        postDiv.appendChild(postImage);
                    };
                    reader.readAsDataURL(file);
                }

                feed.prepend(postDiv);

                // Clear inputs
                postContent.value = '';
                fileInput.value = '';
            } else {
                alert('Please write something or select a file to post.');
            }
        });