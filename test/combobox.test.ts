import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { afterEach, describe, expect, it } from 'vitest';

import Combobox from '../src/components/combobox.vue';

describe('combobox.vue', () => {
    let wrapper: RenderResult;

    afterEach(() => {});

    it('should render', async () => {
        wrapper = render(Combobox);

        const { html, getByDisplayValue } = wrapper;
        getByDisplayValue('Wade Cooper');
        expect(html()).toMatchSnapshot();

        wrapper.unmount();
    });
});
