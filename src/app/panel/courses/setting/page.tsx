import ActiveCourse from "./components/course/active-course";
import LockCourse from "./components/course/lock-course";
import { StepType } from "./types/step.type";

export default function page() {
  const steps: StepType[] = [
    {
      number: 1,
      title: "Active Course",
      content: <ActiveCourse />,
    },
    {
      number: 2,
      title: "Lock Course",
      content: <LockCourse />,
    },
    {
      number: 3,
      title: "New Features",
      description: "Coming Soon ...",
    },
  ];

  return (
    <div className="space-y-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-6 m-0">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center bg-primary/50 border-2 border-primary rounded-full w-10 h-10 font-bold text-white">
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 bg-muted-foreground/15 my-2 w-px min-h-[80px]" />
            )}
          </div>

          <div className="pt-1 w-full">
            <h3 className="font-semibold text-xl">{step.title}</h3>
            <p className="text-muted-foreground text-base">
              {step.description}
            </p>
            {step.content}
          </div>
        </div>
      ))}
    </div>
  );
}
