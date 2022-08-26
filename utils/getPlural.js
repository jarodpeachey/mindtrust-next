const getPlural = silo => {
  if (silo === "design") {
    return "designers"
  } else if (silo === "Design") {
    return "Designers"
  } else if (silo === "marketing") {
    return "marketers"
  } else if (silo === "Marketing") {
    return "Marketers"
  } else if (silo === "strategy") {
    return "strategists"
  } else if (silo === "Strategy") {
    return "Strategists"
  } else if (silo === "production") {
    return "producers"
  } else if (silo === "Production") {
    return "Producers"
  } else if (silo === "technology") {
    return "technology experts"
  } else if (silo === "Technology") {
    return "Technology Experts"
  } else if (silo === "development") {
    return "developers"
  } else if (silo === "Development") {
    return "Developers"
  }
}

export { getPlural }
