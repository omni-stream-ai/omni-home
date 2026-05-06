import { For, createSignal } from "solid-js";
import type { FaqItem } from "../content/site";

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion(props: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = createSignal(0);

  return (
    <div class="faq-list">
      <For each={props.items}>
        {(item, index) => {
          const currentIndex = () => index();
          const isOpen = () => currentIndex() === openIndex();

          return (
            <article classList={{ "faq-item": true, "is-open": isOpen() }}>
              <button
                type="button"
                class="faq-trigger"
                aria-expanded={isOpen()}
                aria-controls={`faq-answer-${currentIndex()}`}
                onClick={() => setOpenIndex(isOpen() ? -1 : currentIndex())}
              >
                <span>{item.question}</span>
                <span class="faq-symbol">{isOpen() ? "−" : "+"}</span>
              </button>
              <div
                id={`faq-answer-${currentIndex()}`}
                classList={{ "faq-answer": true, "is-open": isOpen() }}
                aria-hidden={!isOpen()}
              >
                <div class="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </article>
          );
        }}
      </For>
    </div>
  );
}
