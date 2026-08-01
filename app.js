const examples = [
  {
    path: "Misc/Cryptography/decryption_cesar.py",
    category: "Cryptography",
    title: "Caesar cipher decryption",
    summary: "Demonstrates a simple substitution cipher by shifting alphabetic characters backwards by five positions.",
    concepts: "strings, nested loops, character lookup, user input",
    safety: "safe",
    runnable: true,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Cryptography/decryption_cesar.py"
  },
  {
    path: "Misc/Loops/guess_a_number.py",
    category: "Loops",
    title: "Guess a number game",
    summary: "A text-based guessing game using a random number, an infinite loop, comparisons and a try counter.",
    concepts: "while loop, random, conditions, input conversion",
    safety: "safe",
    runnable: true,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Loops/guess_a_number.py"
  },
  {
    path: "Misc/UnitTesting/Test_Example1/test_math_func.py",
    category: "Unit testing",
    title: "Testing arithmetic functions with pytest",
    summary: "Shows how test functions and assert statements validate expected results from an imported module.",
    concepts: "pytest, imports, assertions, test naming",
    safety: "safe",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/UnitTesting/Test_Example1/test_math_func.py"
  },
  {
    path: "Misc/OS/os_information.py",
    category: "Operating system",
    title: "Operating-system information",
    summary: "Prints platform, architecture and interpreter-related information using os, sys, platform and sysconfig.",
    concepts: "standard library, environment inspection, platform details",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/OS/os_information.py"
  },
  {
    path: "Misc/Network/get_ip.py",
    category: "Networking",
    title: "Resolve a hostname to an IP address",
    summary: "Uses socket.gethostbyname to resolve a hostname. Requires network access and therefore cannot run inside the browser sandbox.",
    concepts: "DNS lookup, sockets, networking",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Network/get_ip.py"
  },
  {
    path: "Misc/OS/mkdir.py",
    category: "Operating system",
    title: "Create a directory",
    summary: "Introduces filesystem operations for creating directories. Review the target path before running.",
    concepts: "os module, filesystem, paths",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/OS/mkdir.py"
  },
  {
    path: "Misc/OS/disk_space.py",
    category: "Operating system",
    title: "Inspect disk space",
    summary: "Demonstrates reading disk usage or free-space information from the local operating system.",
    concepts: "disk usage, system inspection",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/OS/disk_space.py"
  },
  {
    path: "Misc/LogAnalysis/log.py",
    category: "Log analysis",
    title: "Basic log analysis",
    summary: "An introductory example for reading or processing log data. Use sample logs instead of production logs containing personal data.",
    concepts: "files, parsing, security logs",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/LogAnalysis/log.py"
  },
  {
    path: "Misc/Recon_tools/recon1.py",
    category: "Reconnaissance",
    title: "Reconnaissance example 1",
    summary: "An introductory security-reconnaissance script. Run only against systems you own or have explicit permission to test.",
    concepts: "security tooling, network reconnaissance",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Recon_tools/recon1.py"
  },
  {
    path: "Misc/Recon_tools/recon2.py",
    category: "Reconnaissance",
    title: "Reconnaissance example 2",
    summary: "A follow-up reconnaissance example intended for controlled laboratory use.",
    concepts: "security tooling, authorised testing",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Recon_tools/recon2.py"
  },
  {
    path: "Misc/Recon_tools/recon3.py",
    category: "Reconnaissance",
    title: "Reconnaissance example 3",
    summary: "Continues the reconnaissance series with additional network-oriented logic.",
    concepts: "security scripting, reconnaissance",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Recon_tools/recon3.py"
  },
  {
    path: "Misc/Recon_tools/recon4.py",
    category: "Reconnaissance",
    title: "Reconnaissance example 4",
    summary: "An advanced example in the repository's reconnaissance sequence. Review carefully before use.",
    concepts: "security scripting, reconnaissance",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Recon_tools/recon4.py"
  },
  {
    path: "Misc/Email/auto_send_email.py",
    category: "Email",
    title: "Automated email sending",
    summary: "Demonstrates email automation. Credentials must never be committed to source control, and test accounts should be used.",
    concepts: "SMTP, automation, credentials",
    safety: "review",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Email/auto_send_email.py"
  },
  {
    path: "Misc/DictionaryExamples/covid_data_pandas.py",
    category: "Data",
    title: "COVID data with pandas",
    summary: "A data-handling example that uses pandas to work with structured information.",
    concepts: "pandas, dictionaries, tabular data",
    safety: "safe",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/DictionaryExamples/covid_data_pandas.py"
  },
  {
    path: "Misc/Tuple/xycoordinates.py",
    category: "Python basics",
    title: "Coordinates stored in tuples",
    summary: "Shows how immutable tuples can represent x and y coordinates.",
    concepts: "tuples, unpacking, coordinates",
    safety: "safe",
    runnable: true,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/Tuple/xycoordinates.py"
  },
  {
    path: "Misc/misc.txt",
    category: "Packaging",
    title: "Packaging and deployment notes",
    summary: "Links to PyInstaller, NSIS and a repository wiki page explaining how to create a Windows executable.",
    concepts: "PyInstaller, NSIS, distribution",
    safety: "safe",
    runnable: false,
    url: "https://github.com/akjalbani/Test_Python/blob/master/Misc/misc.txt"
  }
];

const playgroundExamples = {
  "Caesar cipher": `import string

alphabet = string.ascii_letters
text = "mjqqt"
result = ""

for character in text:
    if character in alphabet:
        index = alphabet.index(character) - 5
        result += alphabet[index]
    else:
        result += character

print("Ciphertext:", text)
print("Plaintext:", result)`,
  "Guessing logic": `secret_number = 42
guesses = [30, 55, 42]
tries = 0

for guess in guesses:
    tries += 1
    if guess > secret_number:
        print(guess, "is too high")
    elif guess < secret_number:
        print(guess, "is too low")
    else:
        print("Correct:", guess)
        print("Tries:", tries)
        break`,
  "Tuple coordinates": `points = [(2, 4), (5, 9), (-1, 3)]

for x, y in points:
    print(f"x={x}, y={y}, sum={x+y}")`
};

const list = document.querySelector("#example-list");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
let activeCategory = "All";

function categories() {
  return ["All", ...new Set(examples.map(x => x.category))];
}

function renderFilters() {
  filters.innerHTML = "";
  for (const category of categories()) {
    const button = document.createElement("button");
    button.textContent = category;
    button.className = category === activeCategory ? "active" : "";
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderExamples();
    });
    filters.appendChild(button);
  }
}

function renderExamples() {
  const term = search.value.toLowerCase().trim();
  const filtered = examples.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const haystack = `${item.path} ${item.title} ${item.summary} ${item.concepts}`.toLowerCase();
    return matchesCategory && haystack.includes(term);
  });

  list.innerHTML = filtered.map(item => `
    <article class="example-card">
      <header>
        <div>
          <h3>${item.path}</h3>
          <strong>${item.title}</strong>
        </div>
        <span class="badge ${item.safety}">${item.safety === "safe" ? "Browser-safe concept" : "Review before running"}</span>
      </header>
      <p>${item.summary}</p>
      <p class="meta"><strong>Concepts:</strong> ${item.concepts}</p>
      <div class="actions">
        <a href="${item.url}" target="_blank" rel="noreferrer">View source</a>
        ${item.runnable ? '<a href="#playground">Try a related safe demo</a>' : ''}
      </div>
    </article>
  `).join("") || "<p>No examples match the current filter.</p>";
}

search.addEventListener("input", renderExamples);
renderFilters();
renderExamples();

const select = document.querySelector("#example-select");
const editor = document.querySelector("#editor");
const output = document.querySelector("#output");
const runBtn = document.querySelector("#run-btn");
const resetBtn = document.querySelector("#reset-btn");

for (const name of Object.keys(playgroundExamples)) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  select.appendChild(option);
}

function resetEditor() {
  editor.value = playgroundExamples[select.value];
  output.textContent = "Ready.";
}
select.addEventListener("change", resetEditor);
resetBtn.addEventListener("click", resetEditor);
resetEditor();

let pyodidePromise;
async function getPyodide() {
  if (!pyodidePromise) {
    output.textContent = "Loading Python runtime...";
    pyodidePromise = loadPyodide();
  }
  return pyodidePromise;
}

runBtn.addEventListener("click", async () => {
  runBtn.disabled = true;
  output.textContent = "Running...";
  try {
    const pyodide = await getPyodide();
    let captured = "";
    pyodide.setStdout({ batched: text => captured += text + "\n" });
    pyodide.setStderr({ batched: text => captured += text + "\n" });
    await pyodide.runPythonAsync(editor.value);
    output.textContent = captured.trim() || "Program finished without output.";
  } catch (error) {
    output.textContent = String(error);
  } finally {
    runBtn.disabled = false;
  }
});
