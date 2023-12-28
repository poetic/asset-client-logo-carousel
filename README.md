# Asset Client Logo Carousel

The Asset Client Logo Carousel is a custom carousel designed to showcase client logos and testimonials on a website. It provides an interactive and visually appealing way to display client logos and testimonials, allowing users to navigate through them easily.

## Features

- Display client logos and testimonials in a carousel format.
- Smooth transition between logos and testimonials.
- Automatic scrolling to showcase different logos and testimonials.
- Clickable navigation to manually switch between logos and testimonials.
- Responsive design for optimal viewing on different devices.

## Installation

To use the Asset Client Logo Carousel in your project, follow these steps:

1. Download the `customCarousel.js` file from this repository.
2. Include the `customCarousel.js` file in your project's HTML file.
3. Add the necessary HTML markup and CSS styles to create the carousel container and customize its appearance.
4. Initialize the carousel by calling the appropriate functions or event listeners.

## Usage

To use the Asset Client Logo Carousel, follow these guidelines:

1. Create a container element in your HTML file to hold the carousel.
1. Add the necessary HTML markup to define the structure of the carousel, including the client logos and testimonials.
1. Customize the carousel's appearance using CSS styles.
1. use jsdelivr or S3 to add `customCarousel.js` & `customCarousel.css` to your page.
1. Test and preview the carousel in your web browser to ensure it functions as expected.

## Examples

example of html structure in webflow page:

```html
<div class="logo-testimonials_wrapper">
  <div class="slider-logo_list-wrapper">
    <!-- Add your client logos here -->
    <div class="slider-logo_item">
      <img src="logo1.png" alt="Client Logo 1" />
    </div>
    <div class="slider-logo_item">
      <img src="logo2.png" alt="Client Logo 2" />
    </div>
    <!-- Add more client logos as needed -->
  </div>

  <div class="logo-testimonials_list">
    <!-- Add your client testimonials here -->
    <div class="logo-testimonials_item">
      <p>Testimonial 1</p>
    </div>
    <div class="logo-testimonials_item">
      <p>Testimonial 2</p>
    </div>
    <!-- Add more client testimonials as needed -->
  </div>
</div>
```
