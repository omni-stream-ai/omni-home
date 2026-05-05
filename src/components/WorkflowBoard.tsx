import { For, createSignal } from "solid-js";
import type { WorkflowStep } from "../content/site";

type WorkflowBoardProps = {
  steps: WorkflowStep[];
};

export default function WorkflowBoard(props: WorkflowBoardProps) {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const activeStep = () => props.steps[activeIndex()] ?? props.steps[0];

  return (
    <div class="workflow-board">
      <div class="workflow-tabs" role="tablist" aria-label="Workflow steps">
        <For each={props.steps}>
          {(step, index) => (
            <button
              type="button"
              classList={{
                "workflow-tab": true,
                "is-active": index() === activeIndex()
              }}
              role="tab"
              aria-selected={index() === activeIndex()}
              onClick={() => setActiveIndex(index())}
            >
              <span>{step.label}</span>
              <strong>{step.title}</strong>
            </button>
          )}
        </For>
      </div>

      <section class="workflow-panel" role="tabpanel" aria-live="polite">
        <div class="workflow-copy">
          <p class="workflow-kicker">{activeStep().label} / Session flow</p>
          <h3>{activeStep().title}</h3>
          <p>{activeStep().description}</p>
          <p class="workflow-detail">{activeStep().detail}</p>
        </div>

        <div class="workflow-signal">
          <p class="signal-label">What moves through the bridge</p>
          <ul>
            <For each={activeStep().checkpoints}>
              {(checkpoint) => <li>{checkpoint}</li>}
            </For>
          </ul>
        </div>
      </section>
    </div>
  );
}
