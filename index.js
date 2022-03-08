class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return 2 * this.radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  set circumference(circumference) {
    // prettier-ignore
    const num = circumference / 2
    this.radius = num / Math.PI;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set area(area) {
    const num = area / Math.PI;
    this.radius = Math.sqrt(num);
  }
}
