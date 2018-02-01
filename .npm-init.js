function mandatoryField(error = 'Mandatory Field') {
  throw new Error(error);
}

module.exports = {
  "name": prompt("Name of your component (autoprefix with 'my-')", name => (name.length) ? `my-${name.toLowerCase()}` : mandatoryField()),
  "version": "0.1.0",
  "description": prompt("What does your component do?"),
  "main": "dist/cjs/index.js",
  "module": "dist/es/index.mjs",
  "scripts": {
    "build": 'rollup -c rollup.config.js'
  },
  "author": prompt("Your REA email address"),
  "license": "ISC",
  "reaLOB": prompt("REA Line of Business", (lob) => (lob.length) ? lob.toUpperCase() : mandatoryField()),
  "peerDependencies": {
    "react": ">=16"
  },
  "publishConfig": {
    "access": "public"
  }
}
