/** If you are an experienced software developer who exhibits passion, drive, and grit,

* with knowledge of multiple languages (JavaScript, C#, Java, etc...), AWS and/or Azure, and TDD,

* apply today to find out all the ways we support our teammates' growth!

*/

const seeking: {
  qualities: string[];
} = {
  qualities: ["expert", "passionate", "growth mindset", "teacher", "leader"],
};

const ourCoreValues: string[] = ["expert", "owner", "leader", "teacher"];

if (seeking.qualities.some((quality) => ourCoreValues.includes(quality))) {
  const gotoLink = "https://www.sourceallies.com/";
  console.log(`Apply today! ${gotoLink}`);

  // non-browser environments have no location object
  // location.assign("https://www.sourceallies.com/");
}

const me: {
  qualities: string[];
} = { qualities: [seeking.qualities[1], seeking.qualities[2], "self-motivated learner"] };

const willBecome: { qualities: string[] } = { qualities: [seeking.qualities[0], seeking.qualities[3], seeking.qualities[4]] };

const adopting: string[] = ourCoreValues;
console.log("Me:", me);
console.log("Growth:", willBecome);
console.log("My Values:", adopting);
