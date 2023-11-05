---
title: 'LocLLM: Clinical AI Tools'
date: 2023-07-24
tags: python langchain llm
---

Utilizing locally-run, large language models (LLMs) for clinical tasks.

## Objective

In psychiatric practice, the foundation of a patient’s background is established during the initial consultation. However, 20-50% [1] of this time is spent on basic data-gathering of common personal information -- a process which can delay treatment and assessment of present issues.

With a privacy-focused design in mind, we propose the usage of external AI tools to help clinicians gather and maintain background information.

Furthermore, we aim to show how large language models (LLMs) can be leveraged to optimize the relevancy and usefulness of the data collected.

## Psychiatric Intake Assistant

- Chatbot application designed to collect patient background history and streamline the clinical intake process
- Built with Python and Langchain
- Engages participants in a structured interview format: draws queries from a question bank, extracts details, and evaluates user responses to personalize the assessment
- Confidential data and files are stored securely in the local machine
- Performance will be further improved by fine-tuning the model for response accuracy, task-adherence, medical domain knowledge, and appropriate sympathetic tone.

## Patient History Summarizer

- From a completed interview, generate a summarized patient report
- Spans family history, educational background, present medical conditions, past medical history, and more

## Synthetic Interview Generator

- Generate high-quality synthetic datasets, allowing for secure training of language models for use in healthcare
- Models the medical and personal history of synthetic patients
- Diversity-informed approach

### References

[1] [Sinsky Et al.](https://pubmed.ncbi.nlm.nih.gov/27595430/)
