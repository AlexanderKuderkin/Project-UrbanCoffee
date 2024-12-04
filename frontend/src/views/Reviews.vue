<template>
    <div class="Container-main">
        <div class="container">
            <h1>Give us your Review</h1>
            <div class="rating">
                <span id="rating">0</span>/5
            </div>
            <div class="stars" id="stars">
                <span class="star" data-value="1">★</span>
                <span class="star" data-value="2">★</span>
                <span class="star" data-value="3">★</span>
                <span class="star" data-value="4">★</span>
                <span class="star" data-value="5">★</span>
            </div>
            <p>Share your review:</p>
            <textarea id="review"
                    placeholder="Write your review here">
            </textarea>
            <button id="submit">Submit</button>
            <div class="reviews" id="reviews">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Reviews',
    mounted() {
        const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("reviews");

stars.forEach((star) => {
	star.addEventListener("click", () => {
		const value = parseInt(star.getAttribute("data-value"));
		rating.innerText = value;

		stars.forEach((s) => s.classList.remove("one","two","three","four","five"));
		stars.forEach((s, index) => {
			if (index < value) {
				s.classList.add(getStarColorClass(value));
			}
		});

		stars.forEach((s) => s.classList.remove("selected"));
		star.classList.add("selected");
	});
});

submitBtn.addEventListener("click", () => {
	const review = reviewText.value;
	const userRating = parseInt(rating.innerText);

	if (!userRating || !review) {
		alert(
"Please select a rating and provide a review before submitting."
			);
		return;
	}

	if (userRating > 0) {
		const reviewElement = document.createElement("div");
		reviewElement.classList.add("review");
		reviewElement.innerHTML = `<p><strong>Rating: ${userRating}/5</strong></p><p>${review}</p>`;
		reviewsContainer.appendChild(reviewElement);

		// Reset styles after submitting
		reviewText.value = "";
		rating.innerText = "0";
		stars.forEach((s) => s.classList.remove("one","two","three","four","five","selected"));
	}
});

function getStarColorClass(value) {
	switch (value) {
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "three";
		case 4:
			return "four";
		case 5:
			return "five";
		default:
			return "";
	}
}
    }
};
</script>

<style scoped>
.Container-main {
    background-image: url('@/assets/kaffeepulver_cleanup.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 78vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px
}
.container {
    background-color: white;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 400px;
}

h1 {
    font-size: 24px;
    margin: 0;
}

.rating {
    font-size: 20px;
    margin: 10px 0;
}

.stars {
    font-size: 30px;
    margin: 10px 0;
}

.star {
    cursor: pointer;
    margin: 0 5px;
}

.one {
    color: rgb(255, 0, 0);
}

.two {
    color: rgb(255, 106, 0);
}

.three {
    color: rgb(251, 255, 120);
}

.four {
    color: rgb(255, 255, 0);
}

.five {
    color: rgb(24, 159, 14);
}

textarea {
    width: 90%;
    padding: 60px;
    border: 1px solid #ccc;
    border-radius: 20px;
}

button {
    background-color: #A8865F;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.reviews {
    margin-top: 20px;
    text-align: left;
}

.review {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0;
}

.review p {
    margin: 0;
}
</style>