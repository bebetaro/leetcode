function minNumberOfSemesters(
  n: number,
  dependencies: number[][],
  k: number
): number {
  type Route = {
    [key: number]: {
      val: number;
      prev: number[];
      next: number;
    };
  };
  const route: Route = {};
  dependencies.forEach((item) => {
    if (route[item[0]]) {
      route[item[0]] = {
        ...route[item[0]],
        next: item[1],
      };
    } else {
      route[item[0]] = { val: item[0], prev: [], next: item[1] };
    }
    if (route[item[1]]) {
      route[item[1]] = {
        ...route[item[1]],
        prev: [...route[item[1]].prev, item[0]],
      };
    } else {
      route[item[1]] = { val: item[1], prev: [item[0]], next: 0 };
    }
  });
  console.log(route);

  let next = Object.keys(route).map((key) => {
    if (route[key].prev === []) {
      return key;
    }
  });
  let semester = 0;
  while (next.length !== 0) {
    semester += Math.ceil(next.length / k);
    next = next.map((item) => route[item].next);
    next.filter((item) => item !== "0");
  }
  return semester;
}
