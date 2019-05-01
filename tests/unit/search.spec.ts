import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search.vue', () => {
  it('returns list of albums filtered by input value', () => {
    const search = '123';
    const albums = ['123', 'Album 123', 'another album'];
    const wrapper = shallowMount(Search, {
      propsData: { search, albums },
    });
    expect(wrapper.text()).to.include(search);
  });
});
