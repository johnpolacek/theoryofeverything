import MathDisplay from "./MathDisplay";

export default function Predictions() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Primary Prediction */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Primary Prediction</h2>
        <div>Prediction goes here</div>
      </section>

      {/* Secondary Predictions */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Secondary Predictions</h2>
        <div className="flex flex-col gap-8">
          <div>Predictions go here</div>
        </div>
      </section>

      {/* Proposed Experiments */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Proposed Experiments</h2>
        <div>Proposed experiments go here</div>
      </section>
    </div>
  );
}
