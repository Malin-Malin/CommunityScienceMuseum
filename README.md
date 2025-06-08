# Community Science Museum - [Semester Project](https://community-science-museum-malin.netlify.app/)

Welcome to the **Community Science Museum** website, my final exam project. The site is designed to provide visitors with an engaging, user-friendly, and responsive experience. It highlights exhibitions, events, and educational resources to inspire curiosity about science.

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Some Challenges and Solutions](#some-challenges-and-solutions)
5. [Structure](#structure)
6. [Room for Improvement](#room-for-improvment)
7. [Reflection](#reflection)
8. [Author](#author)

---

## About the Project

This project is my **semester project 1- final project** for front-end development studies. The goal was to:

- Create a fully functional website using only **HTML5** and **CSS**.
- Focus on clean design, accessibility, and responsiveness.
- Demonstrate technical skills and creativity.

The primary goal was to create a child-friendly and visually appealing website that would encourage families to visit the museum. I started by analyzing the project materials and breaking tasks into smaller steps. This included defining user stories, such as:
'As a visitor, I want the website to appeal to children so they feel encouraged to visit the museum with their families.

You can view the live site here:  
**[Community Science Museum](https://malin-malin.github.io/CommunityScienceMuseum/index.html)**

---

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Interactive Navigation**: Includes a custom header for the index page, a fixed navigation menu, and a hamburger menu for smaller screens.
- **Content Organization**: Grid-based and flexbox layouts to showcase events, exhibitions, and information.
- **"Coming Soon" Pages**: Placeholder pages for sections not yet developed.
- **Additional Pages**: Contains more content beyond the navigation menu. Click on the tabs to explore further.
- **Accessibility**: Implemented ARIA attributes, semantic HTML, and descriptive alt text for images.
- **Clean Code Structure**: Organized file system with reusable components.

---

## Technologies Used

- **HTML5**: Structured content and semantic elements.
- **CSS**: Styling, responsive design (media queries), and animations (hover).
- **Google Fonts**: Custom fonts for a polished appearance.
- **Font Awesome**: Icons for visual enhancement.

---

## Some Challenges and Solutions

### 1. **Positioning Elements Over Images** and **Speech Bubbles: Time-consuming implementation.**

One of the key challenges was positioning elements over images (e.g., speech bubbles and astronauts). I used **`position: relative`** and **`position: absolute`** in combination with **`z-index`** and adjusted coordinates.

**Example of Code:**

````css
.speech-bubble {
    position: absolute;
    bottom: 10%;
    left: 15%;
    z-index: 10;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
}

I created separate classes for each placement of the speech bubbles and astronauts, hardcoding the specific positions to ensure precision. To solve the challenge of creating borders on the speech bubbles, I added an extra triangle behind the main triangle. By carefully positioning and styling them in relation to each other, I achieved the desired border effect.

This solution was time-consuming and could have been simplified using other methods, many of which required JavaScript. Later, I realized this could have been solved more efficiently using **CSS Grid**, which would have provided better control over positioning and reduced the need for hardcoded values.

### 2. I worked extensively with CSS Grid to create structured layouts for exhibition sections and buttons. Media queries were added to ensure the layout looks great on all screen sizes.

**Example of Code:**
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr; /* Stacks items vertically on smaller screens */
    }
}
```

### 3.**Sticky Header and Navigation**
Creating a sticky navigation that remains fixed at the top while transitioning smoothly required careful testing with position: fixed and ensuring no content overlapped.

---

## Structure

Figma: Layout planning.
Visual studioes: creating the website using HTML and CSS.

The project is organized as follows:
```
/CommunityScienceMuseum
│
├── index.html  				# Main landing page
├── pages/                    	# Images and icons used in the project
│   ├── events.html         	# Coming Soon placeholder page
│   ├── header.html 			# Sticky Header, Navigation, Hamburger Menu: I wanted to link this across all my pages, but as far as I could find, JavaScript is required to achieve this.
│   ├── footer.html 			# Where I designed the footer content: I wanted to link this across all my pages
│
├── CSS/
│   ├── global.css            # General styles for the entire website
│   ├── header.css            # Styles for the header navigation
│   ├── footer.css            # Footer styles
│
├── images/                   # Images used in the project
│   ├── logo.png
│   ├── space.jpg
│   └── ...
│
└── README.md                 # Project documentation (this file)
```
---

## Room for Improvement

### 1. **File and Folder Structure**
The current file structure works but could be improved for better scalability. For example:
- **CSS Files**: Consider separating components like buttons, grids, and layout styling into their own CSS files.
- Use a more organized folder structure.

### 2. **CSS Consistency**
- Implement more **CSS variables** to avoid hardcoding colors, font sizes, and spacing. This will make the code easier to maintain and update.
- Maintain consistency when writing `@media` queries by following a uniform order (e.g., desktop-first or mobile-first).

### 3. **Class Names and IDs**
- Use clearer and more descriptive class names to improve readability and reusability.
- Incorporate **IDs** where appropriate for unique elements to avoid unnecessary duplication of classes.

### 4. **Reducing Code Repetition**
- Review the code to identify and remove unused classes or styles.
- Combine similar styles into reusable components to avoid repetition and make the code cleaner.

### 5. **Grid for Positioning**
Many of the hardcoded positions for elements like speech bubbles and astronauts could be replaced with a **CSS Grid**-based solution. This would simplify the layout significantly and make it more adaptable to different screen sizes.

### 6. **Focus on KISS and DRY Principles**
- I should have followed the **KISS (Keep It Simple, Stupid)** principle to ensure a more streamlined and maintainable design. Simplifying the code and design would have saved time and reduced unnecessary complexity.
- Applying **DRY (Don't Repeat Yourself)** principles to my CSS would have helped eliminate redundant styles and made the codebase easier to maintain.

---

## Reflection
This project allowed me to explore advanced CSS techniques, including positioning, grid layouts, and responsiveness. While working on the project, I faced challenges with:

Overlapping elements (speech bubbles and astronauts).
Ensuring all pages were fully responsive on mobile devices.
Maintaining clean and semantic code for accessibility.
By focusing on simplicity and reusability, I could have achieved a cleaner structure that would be easier to expand and update in the future.
I learned the importance of careful planning, consistent testing, and optimizing for both functionality and design.
This project represents my growth in front-end development and showcases the skills I have gained during the execution of this project.

If I were to do it again, I would have chosen a simpler design, as this is only the second website I have ever programmed.
Considering that the project had a total duration of four weeks from start to finish, this would have been a more practical choice.

---

## Credits

Semester Project has design and code by Malin Skrettingland.

<p align="center">
  <img src="/images/Cartoon-style-portrait-01.05.jpg" alt="Cartoon-style portrait" width="400">
</p>

[GitHub: Malin-Malin](https://github.com/Malin-Malin)
````
