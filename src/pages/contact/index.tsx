import React from "react";
import ReactDOM from "react-dom";
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const state = { value: '' };

function handleChange(event) {
    this.setState({ value: event.target.value });
}

function handleSubmit(event) {
    alert('A name was submitted: ' + state.value);
    event.preventDefault();
}
export default function Contact(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <main>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={state.value} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
            </main>

        </Layout>
    );
}


