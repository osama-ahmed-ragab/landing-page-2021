let counter = 0;
const createSection = () => {
  counter++;
  const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="land_con">
    <h2>Section ${counter}</h2>
    <p>How to Become a Better Person in 12 Steps</p>
    
    <p>It’s normal to feel like you could be doing more when it comes to self-improvement. But being a better person doesn’t involve being overly hard on yourself. In fact, it’s quite the opposite.

    The more self-kindness and self-compassion you can foster, the more equipped you’ll be to treat those around you the same way. Plus, doing good for others can give your life a deeper sense of meaning. It may even help to improve your physical and mental health.
    
    Here’s a look at some ways to build self-improvement into your daily routine and let go of negative thoughts about yourself.</p>

    <p>GIFT TECHNIQUE    </p>
    <p>    When thinking about things you’re grateful for, look for instances of:    </p>
    <p>    Growth: personal growth, like learning a new skill    </p>
    <p>    Inspiration: moments or things that inspired you    </p>
    <p>    Friends/family: people who enrich your life    </p>
    <p>    Tranquility: the small, in-between moments, such as enjoying a cup of coffee or a good book    </p>
    <p>    Surprise: the unexpected or a nice favor</p>

    <a href="https://www.healthline.com/health/how-to-be-a-better-person#gratitude">ForMORE</a>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};

const navBar = document.getElementById("nav__list");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      active.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
};

navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});

for (let i = 1; i < 5; i++) createSection();
createNavItems();

document.getElementById("btn").addEventListener("click", () => {
  createSection();
  createNavItems();
});

const toTop = document.getElementById("top");
const header = document.querySelector(".header");

toTop.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});

let isScrolling;
document.onscroll = () => {
  header.style.display = "block";
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);

  window.scrollY > 800
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
};
