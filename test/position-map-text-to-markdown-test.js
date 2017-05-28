// MIT © 2017 azu
"use strict";
import * as assert from "assert";
import { findAllPositions } from "../src/position-map-text-to-markdown";

describe("mapPosition", () => {
    context("when no match", () => {
        it("should return empty array", () => {
            const results = findAllPositions({
                text: "no match",
                markdown: "# Title"
            });
            assert.ok(results.length === 0);
        });
    });
    context("when single match", () => {
        it("should return results", () => {
            const results = findAllPositions({
                text: "match",
                markdown: "**match** text"
            });
            assert.ok(results.length === 1);
            const [result] = results;
            assert.deepEqual(result, {
                markdown: "match",
                range: [2, 7],
                loc: {
                    start: { line: 1, column: 2 },
                    end: { line: 1, column: 7 }
                }
            });
        });
        it("can get plain text match", () => {
            const results = findAllPositions({
                text: "ABC",
                markdown: "A**B**C"
            });
            assert.ok(results.length === 1);
            const [result] = results;
            assert.deepEqual(result, {
                markdown: "A**B**C",
                range: [0, 7],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 7 }
                }
            });
        });
    });
    context("when multi match", () => {
        it("should return results", () => {
            const results = findAllPositions({
                text: "match",
                markdown: "**match** __match__"
            });
            assert.ok(results.length === 2);
            const [result1, result2] = results;
            assert.deepEqual(result1, {
                markdown: "match",
                range: [2, 7],
                loc: {
                    start: { line: 1, column: 2 },
                    end: { line: 1, column: 7 }
                }
            });
            assert.deepEqual(result2, {
                markdown: "match",
                range: [12, 17],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 17 }
                }
            });
        });
    });
});