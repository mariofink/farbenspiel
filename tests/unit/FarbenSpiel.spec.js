import { shallowMount } from "@vue/test-utils";
import FarbenSpiel from "@/components/FarbenSpiel.vue";

describe("FarbenSpiel.vue", () => {
  it("renders ", () => {
    const msg = "Farbenspiel";
    const wrapper = shallowMount(FarbenSpiel, {});
    expect(wrapper.text()).toMatch(msg);
  });
});
