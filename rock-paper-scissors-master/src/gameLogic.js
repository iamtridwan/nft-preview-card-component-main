let score = 0;

function decision(user, other) {
  // scissors
  if (user === "scissors" && other === "paper") {
    score += 1;
    return ["You Win", score];
  } else if (user === "scissors" && other === "spock") {
    score -= 1;
    return ["House wins", score];
  } else if (user === "scissors" && other === "lizard") {
    score += 1;
    return ["You Win", score];
  } else if (user === "scissors" && other === "rock") {
    score -= 1;
    return ["House wins", score];
  }
  //   paper
  else if (user === "paper" && other === "rock") {
    score += 1;
    return ["You Win", score];
  } else if (user === "paper" && other === "spock") {
    score += 1;
    return ["You Win", score];
  } else if (user === "paper" && other === "lizard") {
    score -= 1;
    return ["House wins", score];
  } else if (user === "paper" && other === "scissors") {
    score -= 1;
    return ["House wins", score];
  }
  // rock
  else if (user === "rock" && other === "lizard") {
    score += 1;
    return ["You Win", score];
  } else if (user === "rock" && other === "paper") {
    score -= 1;
    return ["House wins", score];
  } else if (user === "rock" && other === "spock") {
    score -= 1;
    return ["House wins", score];
  } else if (user === "rock" && other === "scissors") {
    score += 1;
    return ["You Win", score];
  }
  //   spock
  else if (user === "spock" && other === "scissors") {
    score += 1;
    return ["You Win", score];
  } else if (user === "spock" && other === "paper") {
    score -= 1;
    return ["House wins", score];
  } else if (user === "spock" && other === "rock") {
    score += 1;
    return ["You Win", score];
  } else if (user === "spock" && other === "lizard") {
    score -= 1;
    return ["House wins", score];
  }

  //   lizard
  else if (user === "lizard" && other === "spock") {
    score += 1;
    return ["You Win", score];
  } else if (user === "lizard" && other === "scissors") {
    score -= 1;
    return ["House wins", score];
  } else if (user === "lizard" && other === "paper") {
    score += 1;
    return ["You Win", score];
  } else if (user === "lizard" && other === "rock") {
    score -= 1;
    return ["House wins", score];
  }
}

export { score, decision };
