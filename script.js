const questions = [
  { id: 1, category: "filter", text: "Find all employees whose salary is greater than 60,000.", output: "John(101, 70000), Emma(105, 80000), Mike(106, 75000), Sophia(107, 90000), John(109, 70000)", clues: ["stream", "filter", "collect/toList"] },
  { id: 2, category: "basic", text: "Count the total number of employees.", output: "10", clues: ["stream", "count"] },
  { id: 3, category: "collector", text: "Get a list of all employee names.", output: "[John, Alice, Bob, David, Emma, Mike, Sophia, Chris, John, Robert]", clues: ["stream", "map", "collect/toList"] },
  { id: 4, category: "collector", text: "Convert all employee names to uppercase.", output: "[JOHN, ALICE, BOB, DAVID, EMMA, MIKE, SOPHIA, CHRIS, JOHN, ROBERT]", clues: ["stream", "map", "toUpperCase", "collect/toList"] },
  { id: 5, category: "sorting", text: "Sort employees by salary in ascending order.", output: "David(104,45000), Alice(102,50000), Chris(108,55000), Bob(103,60000), Robert(110,60000), John(101,70000), John(109,70000), Mike(106,75000), Emma(105,80000), Sophia(107,90000)", clues: ["stream", "sorted", "Comparator.comparing"] },
  { id: 6, category: "sorting", text: "Sort employees by salary in descending order.", output: "Sophia(107,90000), Emma(105,80000), Mike(106,75000), John(101,70000), John(109,70000), Bob(103,60000), Robert(110,60000), Chris(108,55000), Alice(102,50000), David(104,45000)", clues: ["stream", "sorted", "reversed"] },
  { id: 7, category: "basic", text: "Find the employee with the highest salary.", output: "Sophia(107, 90000)", clues: ["stream", "max", "Comparator.comparing"] },
  { id: 8, category: "basic", text: "Find the employee with the lowest salary.", output: "David(104, 45000)", clues: ["stream", "min", "Comparator.comparing"] },
  { id: 9, category: "basic", text: "Find the average salary of all employees.", output: "65500.0", clues: ["stream", "mapToDouble/mapToInt", "average"] },
  { id: 10, category: "basic", text: "Find the total salary expenditure of the company.", output: "655000", clues: ["stream", "mapToInt", "sum"] },
  { id: 11, category: "filter", text: "Find all employees belonging to the IT department.", output: "John(101,70000), Bob(103,60000), Mike(106,75000), Robert(110,60000)", clues: ["stream", "filter", "equals"] },
  { id: 12, category: "filter", text: "Find employees whose names start with 'J'.", output: "John(101), John(109)", clues: ["stream", "filter", "startsWith"] },
  { id: 13, category: "filter", text: "Find employees whose salary is between 50,000 and 80,000.", output: "Alice(102,50000), Bob(103,60000), Chris(108,55000), Robert(110,60000), John(101,70000), John(109,70000), Mike(106,75000), Emma(105,80000)", clues: ["stream", "filter", "salary range"] },
  { id: 14, category: "basic", text: "Check whether all employees earn more than 40,000.", output: "true", clues: ["stream", "allMatch"] },
  { id: 15, category: "basic", text: "Check whether any employee belongs to Finance.", output: "true", clues: ["stream", "anyMatch"] },
  { id: 16, category: "basic", text: "Check whether no employee has a salary less than 30,000.", output: "true", clues: ["stream", "noneMatch"] },
  { id: 17, category: "filter", text: "Find the first employee whose salary is greater than 75,000.", output: "Emma(105, 80000)", clues: ["stream", "filter", "findFirst"] },
  { id: 18, category: "filter", text: "Find any employee from the HR department.", output: "Alice(102) or Emma(105)", clues: ["stream", "filter", "findAny"] },
  { id: 19, category: "grouping", text: "Count employees in each department.", output: "IT:4, HR:2, Admin:2, Finance:2", clues: ["stream", "collect", "groupingBy", "counting"] },
  { id: 20, category: "grouping", text: "Group employees by department.", output: "IT:[John(101), Bob(103), Mike(106), Robert(110)]; HR:[Alice(102), Emma(105)]; Admin:[David(104), John(109)]; Finance:[Sophia(107), Chris(108)]", clues: ["stream", "collect", "groupingBy"] },
  { id: 21, category: "grouping", text: "Find the average salary department-wise.", output: "IT:66250.0, HR:65000.0, Admin:57500.0, Finance:72500.0", clues: ["stream", "groupingBy", "averagingDouble"] },
  { id: 22, category: "grouping", text: "Find the highest-paid employee in each department.", output: "IT: Mike(106,75000); HR: Emma(105,80000); Admin: John(109,70000); Finance: Sophia(107,90000)", clues: ["stream", "groupingBy", "maxBy"] },
  { id: 23, category: "grouping", text: "Find the lowest-paid employee in each department.", output: "IT: Bob(103,60000) & Robert(110,60000); HR: Alice(102,50000); Admin: David(104,45000); Finance: Chris(108,55000)", clues: ["stream", "groupingBy", "min salary"] },
  { id: 24, category: "grouping", text: "Find the department with the highest average salary.", output: "Finance (72500.0)", clues: ["stream", "groupingBy", "averagingDouble", "max"] },
  { id: 25, category: "grouping", text: "Partition employees based on salary > 70,000.", output: "true: Emma(105,80000), Mike(106,75000), Sophia(107,90000); false: others", clues: ["stream", "partitioningBy"] },
  { id: 26, category: "grouping", text: "Partition employees into IT and Non-IT groups.", output: "IT:[John(101), Bob(103), Mike(106), Robert(110)]; Non-IT:[Alice(102), David(104), Emma(105), Sophia(107), Chris(108), John(109)]", clues: ["stream", "partitioningBy"] },
  { id: 27, category: "grouping", text: "Group employees by salary range: Low <60k, Medium 60k-75k, High >75k.", output: "Low:[David(104), Alice(102), Chris(108)]; Medium:[Bob(103), Robert(110), John(101), John(109), Mike(106)]; High:[Emma(105), Sophia(107)]", clues: ["stream", "groupingBy", "custom classifier"] },
  { id: 28, category: "collector", text: "Find all distinct department names.", output: "[IT, HR, Admin, Finance]", clues: ["stream", "map", "distinct"] },
  { id: 29, category: "collector", text: "Find duplicate employee names.", output: "John (appears twice)", clues: ["stream", "groupingBy", "counting", "filter"] },
  { id: 30, category: "collector", text: "Find duplicate salaries.", output: "70000 (2), 60000 (2)", clues: ["stream", "groupingBy", "counting", "filter"] },
  { id: 31, category: "collector", text: "Find the frequency of employee names.", output: "John:2; Alice:1; Bob:1; David:1; Emma:1; Mike:1; Sophia:1; Chris:1; Robert:1", clues: ["stream", "groupingBy", "counting"] },
  { id: 32, category: "collector", text: "Find the frequency of salaries.", output: "70000:2; 60000:2; 45000:1; 50000:1; 80000:1; 75000:1; 90000:1; 55000:1", clues: ["stream", "groupingBy", "counting"] },
  { id: 33, category: "grouping", text: "Find employees having the same salary.", output: "70000: John(101), John(109); 60000: Bob(103), Robert(110)", clues: ["stream", "groupingBy", "filter"] },
  { id: 34, category: "grouping", text: "Find departments having more than one employee.", output: "IT, HR, Admin, Finance", clues: ["stream", "groupingBy", "counting", "filter"] },
  { id: 35, category: "sorting", text: "Find the second highest salary.", output: "80000", clues: ["stream", "map", "distinct", "sorted", "skip"] },
  { id: 36, category: "sorting", text: "Find the third highest salary.", output: "75000", clues: ["stream", "map", "distinct", "sorted", "skip"] },
  { id: 37, category: "sorting", text: "Find the Nth highest salary as distinct salaries descending.", output: "[1:90000, 2:80000, 3:75000, 4:70000, 5:60000, 6:55000, 7:50000, 8:45000]", clues: ["stream", "distinct", "sorted"] },
  { id: 38, category: "sorting", text: "Find the top 3 highest salaries.", output: "[90000, 80000, 75000]", clues: ["stream", "sorted", "limit"] },
  { id: 39, category: "sorting", text: "Find the top 5 highest-paid employees.", output: "Sophia(107,90000), Emma(105,80000), Mike(106,75000), John(101,70000), John(109,70000)", clues: ["stream", "sorted", "limit"] },
  { id: 40, category: "sorting", text: "Sort employees by department and then salary descending.", output: "IT:[Mike(106,75000), John(101,70000), Bob(103,60000), Robert(110,60000)]; HR:[Emma(105,80000), Alice(102,50000)]; Admin:[John(109,70000), David(104,45000)]; Finance:[Sophia(107,90000), Chris(108,55000)]", clues: ["stream", "sorted", "thenComparing/groupingBy"] },
  { id: 41, category: "sorting", text: "Sort employees by name and then salary.", output: "[Alice(102,50000), Bob(103,60000), Chris(108,55000), David(104,45000), Emma(105,80000), John(101,70000), John(109,70000), Mike(106,75000), Robert(110,60000), Sophia(107,90000)]", clues: ["stream", "sorted", "thenComparing"] },
  { id: 42, category: "sorting", text: "Find employees with the same salary sorted by name.", output: "60000: [Bob(103), Robert(110)]; 70000: [John(101), John(109)]", clues: ["stream", "groupingBy", "sorted"] },
  { id: 43, category: "collector", text: "Convert List<Employee> to List<String> containing names only.", output: "[John, Alice, Bob, David, Emma, Mike, Sophia, Chris, John, Robert]", clues: ["stream", "map", "toList"] },
  { id: 44, category: "collector", text: "Convert List<Employee> to Map<Integer, Employee> using ID as key.", output: "{101:John(IT,70000), 102:Alice(HR,50000), 103:Bob(IT,60000), 104:David(Admin,45000), 105:Emma(HR,80000), 106:Mike(IT,75000), 107:Sophia(Finance,90000), 108:Chris(Finance,55000), 109:John(Admin,70000), 110:Robert(IT,60000)}", clues: ["stream", "collect", "toMap"] },
  { id: 45, category: "collector", text: "Convert List<Employee> to Map<String, Double> where name maps to salary list because John repeats.", output: "John:[70000,70000], Alice:[50000], Bob:[60000], David:[45000], Emma:[80000], Mike:[75000], Sophia:[90000], Chris:[55000], Robert:[60000]", clues: ["stream", "groupingBy", "mapping"] },
  { id: 46, category: "collector", text: "Join all employee names into a comma-separated string.", output: "John,Alice,Bob,David,Emma,Mike,Sophia,Chris,John,Robert", clues: ["stream", "map", "joining"] },
  { id: 47, category: "collector", text: "Join all distinct department names separated by \" | \".", output: "IT | HR | Admin | Finance", clues: ["stream", "map", "distinct", "joining"] },
  { id: 48, category: "collector", text: "Create a map of Department -> Employee Count.", output: "{IT:4, HR:2, Admin:2, Finance:2}", clues: ["stream", "groupingBy", "counting"] },
  { id: 49, category: "collector", text: "Create a map of Department -> Total Salary.", output: "{IT:265000, HR:130000, Admin:115000, Finance:145000}", clues: ["stream", "groupingBy", "summingInt"] },
  { id: 66, category: "advanced", text: "Find employees whose salary is greater than their department average.", output: "John(101, IT,70000), Mike(106, IT,75000), Emma(105, HR,80000), John(109, Admin,70000), Sophia(107, Finance,90000)", clues: ["stream", "groupingBy", "averagingDouble", "filter"] },
  { id: 67, category: "basic", text: "Find employees earning the maximum salary in the company.", output: "Sophia(107, 90000)", clues: ["stream", "max"] },
  { id: 68, category: "basic", text: "Find employees earning the minimum salary in the company.", output: "David(104, 45000)", clues: ["stream", "min"] },
  { id: 69, category: "advanced", text: "Find departments where average salary is greater than 60,000.", output: "IT, HR, Finance", clues: ["stream", "groupingBy", "averagingDouble", "filter"] },
  { id: 70, category: "grouping", text: "Find the sum of salaries department-wise.", output: "IT:265000, HR:130000, Admin:115000, Finance:145000", clues: ["stream", "groupingBy", "summingInt"] },
  { id: 71, category: "advanced", text: "Find the employee with the longest name.", output: "Sophia(107) and Robert(110)", clues: ["stream", "max", "length"] },
  { id: 72, category: "advanced", text: "Find the employee with the shortest name.", output: "Bob(103)", clues: ["stream", "min", "length"] },
  { id: 73, category: "grouping", text: "Find employees grouped by the first letter of their name.", output: "A:[Alice(102)]; B:[Bob(103)]; C:[Chris(108)]; D:[David(104)]; E:[Emma(105)]; J:[John(101), John(109)]; M:[Mike(106)]; R:[Robert(110)]; S:[Sophia(107)]", clues: ["stream", "groupingBy", "charAt"] },
  { id: 74, category: "advanced", text: "Create a custom collector to join employee names with \" | \".", output: "John | Alice | Bob | David | Emma | Mike | Sophia | Chris | John | Robert", clues: ["stream", "collect", "Collector.of/joining"] },
  { id: 75, category: "advanced", text: "Create a custom collector to calculate total salary without using Collectors.summingDouble().", output: "655000", clues: ["stream", "collect", "Collector.of/reducing"] }
];

const state = {
  index: 0,
  solved: new Set(JSON.parse(localStorage.getItem("streamSolved") || "[]")),
  filter: "all",
  compilerLoaded: false,
  compilerSyncTimer: 0
};

const nodes = {
  questionButtons: document.querySelector("#questionButtons"),
  categoryFilter: document.querySelector("#categoryFilter"),
  questionMeta: document.querySelector("#questionMeta"),
  questionText: document.querySelector("#questionText"),
  expectedOutput: document.querySelector("#expectedOutput"),
  codeEditor: document.querySelector("#codeEditor"),
  compilerOutput: document.querySelector("#compilerOutput"),
  compilerFrame: document.querySelector("#oneCompilerFrame"),
  streamWarning: document.querySelector("#streamWarning"),
  comparisonPanel: document.querySelector("#comparisonPanel"),
  comparisonExpected: document.querySelector("#comparisonExpected"),
  comparisonActual: document.querySelector("#comparisonActual"),
  resultMessage: document.querySelector("#resultMessage"),
  score: document.querySelector("#score"),
  sparkles: document.querySelector("#sparkles")
};

function clearStoredOutputs() {
  Object.keys(localStorage)
    .filter((key) => key.startsWith("streamOutput:"))
    .forEach((key) => localStorage.removeItem(key));
}

function starterCode(question) {
  return `import java.util.*;
import java.util.stream.*;

class Employee { private final int id; private final String name; private final String department; private final double salary; Employee(int id, String name, String department, double salary) { this.id = id; this.name = name; this.department = department; this.salary = salary; } public int getId() { return id; } public String getName() { return name; } public String getDepartment() { return department; } public double getSalary() { return salary; } @Override public String toString() { return name + "(" + id + "," + (int) salary + ")"; } }

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee(101, "John", "IT", 70000),
            new Employee(102, "Alice", "HR", 50000),
            new Employee(103, "Bob", "IT", 60000),
            new Employee(104, "David", "Admin", 45000),
            new Employee(105, "Emma", "HR", 80000),
            new Employee(106, "Mike", "IT", 75000),
            new Employee(107, "Sophia", "Finance", 90000),
            new Employee(108, "Chris", "Finance", 55000),
            new Employee(109, "John", "Admin", 70000),
            new Employee(110, "Robert", "IT", 60000)
        );

        // Question ${question.id}: ${question.text}
        // Write your Stream API answer below and print only the final answer.

        Object answer = employees.stream()
            // continue here
            ;

        System.out.println(answer);
    }
}`;
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/[\[\]{}]/g, "")
    .replace(/\s+/g, "")
    .replace(/->/g, ":")
    .replace(/and/g, "&");
}

function usesStream(code) {
  return /\.(stream|parallelStream)\s*\(/.test(code);
}

function shortQuestionName(question) {
  const names = {
    1: "Salary >60k",
    2: "Total count",
    3: "Names list",
    4: "Uppercase names",
    5: "Salary asc",
    6: "Salary desc",
    7: "Top salary",
    8: "Lowest salary",
    9: "Avg salary",
    10: "Total salary",
    11: "IT team",
    12: "Names start J",
    13: "50k-80k salary",
    14: "All >40k",
    15: "Any Finance",
    16: "None <30k",
    17: "First >75k",
    18: "Any HR",
    19: "Dept count",
    20: "Group by dept",
    21: "Dept avg",
    22: "Dept top earner",
    23: "Dept low earner",
    24: "Best avg dept",
    25: "Partition >70k",
    26: "IT vs Non-IT",
    27: "Salary bands",
    28: "Departments",
    29: "Duplicate names",
    30: "Duplicate salary",
    31: "Name frequency",
    32: "Salary frequency",
    33: "Same salary",
    34: "Dept >1",
    35: "2nd highest",
    36: "3rd highest",
    37: "Nth highest",
    38: "Top 3 salaries",
    39: "Top 5 earners",
    40: "Dept + salary sort",
    41: "Name sort",
    42: "Same salary sort",
    43: "List of names",
    44: "ID map",
    45: "Name salary map",
    46: "Join names",
    47: "Join depts",
    48: "Dept count map",
    49: "Dept salary map",
    66: "Above dept avg",
    67: "Max earners",
    68: "Min earners",
    69: "Avg >60k depts",
    70: "Dept salary sum",
    71: "Longest name",
    72: "Shortest name",
    73: "First letter group",
    74: "Custom joiner",
    75: "Custom sum"
  };
  return names[question.id] || question.text;
}

function matchingClues(question, code) {
  const clean = code.toLowerCase();
  return question.clues.filter((clue) => {
    if (clue === "stream") return usesStream(code);
    return clue
      .toLowerCase()
      .split("/")
      .some((part) => clean.includes(part.split(" ")[0]));
  });
}

function renderQuestionList() {
  const visible = questions.filter((question) => state.filter === "all" || question.category === state.filter);
  nodes.questionButtons.innerHTML = "";

  visible.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `question-pill${question.id === currentQuestion().id ? " active" : ""}${state.solved.has(question.id) ? " solved" : ""}`;
    button.innerHTML = `<span>Q${question.id}</span><span>${shortQuestionName(question)}</span>`;
    button.addEventListener("click", () => {
      state.index = questions.findIndex((item) => item.id === question.id);
      render();
    });
    nodes.questionButtons.appendChild(button);
  });
}

function currentQuestion() {
  return questions[state.index];
}

function render() {
  const question = currentQuestion();
  nodes.questionMeta.textContent = `Question ${question.id} - ${question.category}`;
  nodes.questionText.textContent = question.text;
  nodes.expectedOutput.textContent = question.output;
  nodes.codeEditor.value = localStorage.getItem(`streamCode:${question.id}`) || starterCode(question);
  nodes.compilerOutput.value = "";
  nodes.resultMessage.textContent = "";
  nodes.resultMessage.className = "";
  clearComparison();
  nodes.streamWarning.hidden = usesStream(nodes.codeEditor.value);
  nodes.score.textContent = state.solved.size;
  renderQuestionList();
  queueCompilerSync();
}

function saveProgress() {
  localStorage.setItem("streamSolved", JSON.stringify([...state.solved]));
  localStorage.setItem(`streamCode:${currentQuestion().id}`, nodes.codeEditor.value);
}

function sendCodeToCompiler() {
  if (!nodes.compilerFrame.contentWindow) return;
  nodes.compilerFrame.contentWindow.postMessage({
    eventType: "populateCode",
    language: "java",
    files: [
      {
        name: "Main.java",
        content: nodes.codeEditor.value
      }
    ]
  }, "*");
}

function queueCompilerSync(delay = 500) {
  window.clearTimeout(state.compilerSyncTimer);
  state.compilerSyncTimer = window.setTimeout(() => {
    sendCodeToCompiler();
  }, delay);
}

function runCompiler() {
  sendCodeToCompiler();
  window.setTimeout(() => {
    nodes.compilerFrame.contentWindow.postMessage({ eventType: "triggerRun" }, "*");
  }, 250);
}

function clearComparison() {
  nodes.comparisonPanel.hidden = true;
  nodes.comparisonExpected.textContent = "";
  nodes.comparisonActual.textContent = "";
  nodes.comparisonActual.classList.remove("unmatched");
}

function showComparison(actual, matched) {
  nodes.comparisonPanel.hidden = false;
  nodes.comparisonExpected.textContent = currentQuestion().output;
  nodes.comparisonActual.textContent = actual || "(no output captured)";
  nodes.comparisonActual.classList.toggle("unmatched", !matched);
}

function tryReadCompilerOutputFromDom() {
  try {
    const doc = nodes.compilerFrame.contentDocument || nodes.compilerFrame.contentWindow.document;
    const selectors = [
      "#output",
      "#stdout",
      ".output",
      ".stdout",
      ".xterm-screen",
      "[data-testid='output']",
      "pre",
      "textarea"
    ];

    for (const selector of selectors) {
      const item = doc.querySelector(selector);
      const value = item && (item.value || item.innerText || item.textContent || "").trim();
      if (value) return value;
    }
  } catch (error) {
    return "";
  }
  return "";
}

function submitAnswer() {
  const question = currentQuestion();
  const code = nodes.codeEditor.value;
  const output = (tryReadCompilerOutputFromDom() || nodes.compilerOutput.value).trim();
  const matched = normalize(output) === normalize(question.output);

  nodes.streamWarning.hidden = usesStream(code);

  if (!usesStream(code)) {
    nodes.resultMessage.textContent = "Warning: Stream API is not used here.";
    nodes.resultMessage.className = "bad";
    showComparison(output, false);
    return;
  }

  if (!output) {
    nodes.resultMessage.textContent = "Could not read compiler output automatically. Paste the compiler output here and submit again.";
    nodes.resultMessage.className = "bad";
    showComparison("", false);
    return;
  }

  nodes.compilerOutput.value = output;
  showComparison(output, matched);

  if (!matched) {
    nodes.resultMessage.textContent = "Output does not match the target yet. The unmatched answer is shown in red.";
    nodes.resultMessage.className = "bad";
    return;
  }

  state.solved.add(question.id);
  saveProgress();
  nodes.score.textContent = state.solved.size;
  nodes.resultMessage.textContent = "Correct. Nice work.";
  nodes.resultMessage.className = "ok";
  sparkle();
  renderQuestionList();
}

function runAndSubmit() {
  const code = nodes.codeEditor.value;
  nodes.streamWarning.hidden = usesStream(code);
  clearComparison();

  if (!usesStream(code)) {
    nodes.resultMessage.textContent = "Warning: Stream API is not used here.";
    nodes.resultMessage.className = "bad";
    return;
  }

  if (nodes.compilerOutput.value.trim()) {
    submitAnswer();
    return;
  }

  runCompiler();
  saveProgress();
  nodes.resultMessage.textContent = "Running in the embedded compiler...";
  nodes.resultMessage.className = "";

  window.setTimeout(() => {
    const domOutput = tryReadCompilerOutputFromDom();
    if (domOutput) {
      nodes.compilerOutput.value = domOutput;
      submitAnswer();
      return;
    }
    if (nodes.compilerOutput.value.trim()) {
      submitAnswer();
      return;
    }
    nodes.resultMessage.textContent = "Code was inserted and run, but browser security blocked automatic output reading. Paste the compiler output here and click Run & submit again.";
    nodes.resultMessage.className = "bad";
    showComparison("", false);
  }, 2400);
}

function readCompilerOutputMessage(data) {
  if (!data || typeof data !== "object") return "";
  const candidates = [
    data.stdout,
    data.output,
    data.result,
    data.console,
    data.code,
    data.data && data.data.stdout,
    data.data && data.data.output,
    data.data && data.data.result,
    data.data && data.data.code
  ];
  return candidates.find((item) => typeof item === "string" && item.trim()) || "";
}

function readCompilerCodeMessage(data) {
  if (!data || typeof data !== "object") return "";
  const file = Array.isArray(data.files) && data.files[0];
  const nestedFile = data.data && Array.isArray(data.data.files) && data.data.files[0];
  const candidates = [
    data.source,
    data.code,
    data.content,
    file && (file.content || file.code),
    data.data && data.data.source,
    data.data && data.data.code,
    data.data && data.data.content,
    nestedFile && (nestedFile.content || nestedFile.code)
  ];
  return candidates.find((item) => typeof item === "string" && item.includes("class Employee")) || "";
}

window.addEventListener("message", (event) => {
  if (!String(event.origin).includes("onecompiler.com")) return;
  const code = readCompilerCodeMessage(event.data);
  if (code) {
    nodes.codeEditor.value = code;
    nodes.streamWarning.hidden = usesStream(code);
    saveProgress();
  }
  const output = readCompilerOutputMessage(event.data);
  if (!output) return;
  nodes.compilerOutput.value = output.trim();
  submitAnswer();
});

function sparkle() {
  const colors = ["#22c55e", "#3b82f6", "#e5e7eb", "#14b8a6", "#f59e0b", "#ef4444"];
  nodes.sparkles.innerHTML = "";
  nodes.sparkles.classList.add("active");
  for (let i = 0; i < 420; i += 1) {
    const dot = document.createElement("span");
    dot.className = "sparkle";
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${-18 - Math.random() * 40}vh`;
    dot.style.width = `${5 + Math.random() * 7}px`;
    dot.style.height = `${8 + Math.random() * 14}px`;
    dot.style.setProperty("--drift", `${(Math.random() - 0.5) * 260}px`);
    dot.style.setProperty("--spin", `${360 + Math.random() * 900}deg`);
    dot.style.setProperty("--confetti", colors[Math.floor(Math.random() * colors.length)]);
    dot.style.animationDelay = `${Math.random() * 8200}ms`;
    dot.style.animationDuration = `${1600 + Math.random() * 1800}ms`;
    nodes.sparkles.appendChild(dot);
  }
  window.setTimeout(() => {
    nodes.sparkles.innerHTML = "";
    nodes.sparkles.classList.remove("active");
  }, 10000);
}

document.querySelector("#submitBtn").addEventListener("click", runAndSubmit);
document.querySelector("#resetCode").addEventListener("click", () => {
  nodes.codeEditor.value = starterCode(currentQuestion());
  nodes.compilerOutput.value = "";
  saveProgress();
  queueCompilerSync(100);
});
document.querySelector("#clearProgress").addEventListener("click", () => {
  state.solved.clear();
  questions.forEach((question) => {
    localStorage.removeItem(`streamCode:${question.id}`);
  });
  localStorage.removeItem("streamSolved");
  render();
});
document.querySelector("#prevBtn").addEventListener("click", () => {
  state.index = (state.index - 1 + questions.length) % questions.length;
  render();
});
document.querySelector("#nextBtn").addEventListener("click", () => {
  state.index = (state.index + 1) % questions.length;
  render();
});
nodes.categoryFilter.addEventListener("change", (event) => {
  state.filter = event.target.value;
  renderQuestionList();
});
nodes.codeEditor.addEventListener("input", () => {
  nodes.streamWarning.hidden = usesStream(nodes.codeEditor.value);
  saveProgress();
});
nodes.compilerFrame.addEventListener("load", () => {
  state.compilerLoaded = true;
  queueCompilerSync(800);
});

clearStoredOutputs();
render();
