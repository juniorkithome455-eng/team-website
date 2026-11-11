# Team Name: Cypher Cloud Team

**Live site:** https://juniorkithome455-eng.github.io/team-website/index.html

## Team

| Name | Registration no. | GitHub username |
|Flavine Odimbo | COM/3484/26 | Osimboflavin-del|
|Junior Kithome | | Juniorkithome455-eng |
| | | |

## Who drove each part

- Part 0, 2, 4: Flavine Osimbo
- Part 1, 3: Junior Kithome

## Personalisation

- Our colours: Green, Blue and White (Variants):root in css/styles.css
- Projects we added: Hero Image, Project gallery html page
- Extension challenge(s) completed: E3 searcch the projects + E2 Follow the systeme theme

## Reflection

1. A <div> is not focusable by keyboard and is not announced as a button by screen readers. You would lose keyboard operability and accessible name/role, which affects keyboard-only users and blind users using assistive technology. A real <button> gives you focus, Enter/Space activation, and semantics for free.

2. Without defer, the script in <head> runs before the browser has parsed the <body>. Any document.getElementById() would return null and the script would crash. With defer, the browser downloads the script in parallel but waits until HTML parsing is finished before running it.

3. With innerHTML, visitor-typed titles are parsed as HTML. An attacker could inject <script> or <img onerror=...> and run code in other visitors' browsers — cross-site scripting (XSS). textContent treats everything as plain text, so tags are shown harmlessly and cannot execute.

4. JavaScript validation can be bypassed by disabling JavaScript, editing the page in DevTools, or sending a request directly with curl/Postman. The server cannot trust anything from the browser, so it must re-check length, format, and required fields before saving or using the data.

5. An origin is scheme + host + port. file:// and http://127.0.0.1:5500 are different origins, and localStorage is isolated per origin. So a theme saved on Live Server is not visible to a double-clicked file, even though it is the same files on the same computer.

6. The navigation/header/footer is duplicated across every HTML page. If you change one link, you must change it in every file, and it is easy to miss one and leave the site inconsistent. It could be avoided by generating the nav with JavaScript from one shared file, or by using a template/static-site generator.
