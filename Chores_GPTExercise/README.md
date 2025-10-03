# The Flatmate Chore Board

Mini story: You and two flatmates share a small apartment. Every week you rotate chores  
(dishes, vacuum, take out trash, buy groceries, water plants, clean bathroom).  
Each chore has an estimated time (minutes per week) and a **done** flag for whether it’s completed this week.  
You want a tiny script that:

- Stores chores and flatmates (arrays of objects),
- Lists incomplete chores and total time required,
- Assigns chores fairly using a loop,
- Models a **Roommate** as a class with a method to compute their weekly **load**.

This README explains the exercise and how the provided implementation satisfies each step.

---

## Exercise Roadmap

**Step 1**  — Create the initial data model (arrays of chores + roommates).

**Step 2** — Loop to print all incomplete chores and the sum of their estimated minutes.

**Step 3**  — Implement fair assignment of chores using a loop; update roommates’ assigned chores.

**Step 4**  — Create a `Roommate` class with `addChore()` and `getLoad()` methods; convert roommates to class instances.

**Step 5**  — Produce a final summary (each roommate, their chores, and total minutes).

---

## Implementation Overview

The provided code:

- Defines two classes: **`Roommate`** and **`Chore`**.
- Builds arrays of `Chore` instances (`chores`) and `Roommate` instances (`roommates`).
- Sorts chores by **descending time** so heavier chores are assigned first.
- Computes a list of **incomplete** chores (`status === false`).
- Implements **fair** assignment as **load-balanced greedy**:  
  for each incomplete chore, it sorts roommates by current `getLoad()` and assigns the chore to the lightest roommate.
- Prints a **summary** line per roommate: total minutes and their assigned chores.

This is slightly different from strict round-robin; it balances total minutes instead of rotating fixed order.

---

## How to Run

1. Save the code into a file, e.g. `chore_board.js`.
2. Run with Node:
   ```bash
   node chore_board.js
