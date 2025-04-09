import React from "react";

// import functions from the React Testing library
// - render: to "mount" the component in a virtual DOM for testing
// - screen: provides access to methods for querying elements in the document
// - fireEvent: to simulate events / user interactions on the rendered component
import { render, screen, fireEvent } from '@testing-library/react';
import MajorDropdown from '../src/components/MajorDropdown.jsx';

// this simulates user events like selecting from a dropdown more naturally
import userEvent from '@testing-library/user-event';

// "vi" object from Vitest is used for mocking functions
// this is similar to jest.fn() from Jest
import { vi } from "vitest";


// group tests together under a common name in a describe block
describe('MajorDropdown Component', () => {
    // this is the sample data used to test the component
    const sampleMajors = [
        { _id: '1', name: 'Computer Science Gateway' },
        { _id: '2', name: 'Mechanical Engineering' },
    ];

    /**
     * Helper function to render the MajorDropdown with default props
     * @param {object} overrides - Props to override defaults
     */
    const renderMajorDropdown = (overrides = {}) => {
        const props = {
            majors: sampleMajors,
            selectedMajorId: "",
            onSelect: () => { },
            ...overrides,
        };
        // use 'render' function to "mount" component, then pass the sample data
        // start with no selection and an empty onSelect function
        render(<MajorDropdown {...props} />)
    };

    /**
     * Helper function to assert that an element is attached to document.body
     * @param {HTMLElement} element - The element to check
     */
    const expectInDocument = (element) => {
        // Chai assertion syntax for checking if the element is in the document body
        expect(document.body.contains(element)).to.be.true;
    }

    // use the 'test' function to declare a single test case
    // Normal case 1
    test('Renders label and select element correctly', () => {

        // render component with default props
        renderMajorDropdown();

        // use screen.getByRole to find the element that acts as a combobox select element
        const selectElement = screen.getByRole('combobox', { name: /Select a major:/i });
        expectInDocument(selectElement);

    });

    // Normal case 2
    test('Renders the default option and options for each major', () => {
        // render component with default props
        renderMajorDropdown();

        // use screen.getByRole to check that the default option is set up correctly to prompt the user
        const defaultOption = screen.getByRole('option', {
            name: /--Select Major--/i,
        })
        expectInDocument(defaultOption);

        // use screen.getByRole to check that the other options are rendered correctly from sampleMajors
        // create a new case-insensitive regular expression for each option
        sampleMajors.forEach((major) => {
            const option = screen.getByRole('option', {
                name: new RegExp(major.name, 'i'),
            });
            expectInDocument(option);
        });
    });

    // Normal case 3
    test('Calls onSelect callback when selection changes', () => {
        // create a mock function with Vitest to simulate the onSelect callback function
        // is called when user changes selection in the dropdown
        const onSelectMock = vi.fn();

        // Render the component, passing the mock function as onSelect
        renderMajorDropdown({ onSelect: onSelectMock });

        // use screen.getByRole to find the element that acts as a combobox select element
        const selectElement = screen.getByRole('combobox');

        // simulate a change event on the select element
        fireEvent.change(selectElement, { target: { value: '1' } });
        expect(onSelectMock.mock.calls).to.have.lengthOf(1);
    });

    // Edge case 1
    test('Renders only default option when no majors are provided', () => {
        // render component with an empty array for majors
        renderMajorDropdown({ majors: [] });

        // use screen.getByRole to find the option elements
        const options = screen.getAllByRole('option');
        expect(options.length).to.equal(1);
        expect(options[0].textContent).to.match(/--Select Major--/i);
    });

    // Edge case 2
    test('Select element reverts to default if a non-existent major is entered', () => {
        // render component with an empty array for majors
        renderMajorDropdown({ selectedMajorId: "non-existent" });

        // use screen.getByRole to find the element that acts as a combobox select element
        const selectElement = screen.getByRole('combobox');
        expect(selectElement.value).to.equal("");

    });

    // Error case 1
    test('Throws an error when majors is null', () => {
        expect(() => renderMajorDropdown({ majors: null })).to.throw();
    });

    // Error case 2
    test("Throws error when onSelect is not provided", () => {
        expect(() =>
            render(<MajorDropdown majors={sampleMajors} selectedMajorId="" />
            )
        ).to.throw();
    });

});