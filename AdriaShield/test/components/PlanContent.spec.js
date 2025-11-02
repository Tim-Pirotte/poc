// @vitest-environment jsdom

// https://www.youtube.com/playlist?list=PLXDouhCU5r6oai6AB-WpDNPxEAqhvDfFt

import PlanContent from '@/components/PlanContent.vue';
import { it, expect } from 'vitest';
import { mount } from '@vue/test-utils'

it('empty', () => {
    const wrapper = mount(PlanContent,
        {
            props: {
                nodes: []
            }
        }
    );

    expect(wrapper.html()).toEqual('');
});

it('basic header', () => {
    const wrapper = mount(PlanContent,
        {
            props: {
                nodes: [
                    { "type": "heading", "content": "Basic header" }
                ]
            }
        }
    );

    expect(wrapper.html()).toEqual('<h4>Basic header</h4>');
});