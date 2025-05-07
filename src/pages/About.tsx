import Counter from "@/components/Counter";

function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        quisquam commodi, sed quo itaque modi error, voluptatem enim temporibus
        iusto laboriosam minus pariatur nostrum excepturi, dolor praesentium!
        Velit, sunt modi!
      </p>
      <div className="flex gap-2 mt-4 mb-4"></div>
      <Counter />
    </div>
  );
}

export default About;
