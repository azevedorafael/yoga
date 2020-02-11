import React from 'react';
import { node, bool, oneOf } from 'prop-types';
import CodeBlockContext from './CodeBlockContext';
import { ReactLive, PrismHighlight, SnackEmbed } from '.';
import { importStatement } from './shared/templates';
import { YogaComponents, YogaIcons, NativeComponents } from './shared/modules';

const CodeBlock = ({ children: sampleCode, center, state, type, theme }) => {
  const code = sampleCode.trim();

  const buildImportString = modules => {
    const findComponents = /(?:<)(\w*)(?=\s*?\/?>*)/gm;
    const sortModules = /(@gympass\/yoga*)/gm;
    const imports = [];

    modules
      .sort(a => (a.path.match(sortModules) ? -1 : 0))
      .forEach(({ name, path }) => {
        const moduleComponents = {
          components: [
            ...new Set(
              code
                .match(findComponents)
                .map(c => c.replace('<', ''))
                .filter(c => c),
            ),
          ]
            .filter(importedComponent =>
              Object.keys(name).includes(importedComponent),
            )
            .filter(
              item => !imports.filter(c => c.components.includes(item)).length,
            ),
          path,
        };

        if (moduleComponents.components.length > 0) {
          imports.push(moduleComponents);
        }
      });

    return [
      ...imports.map(({ components, path }) =>
        importStatement(components, path),
      ),
    ].join('\n');
  };

  const packages = [
    { name: YogaIcons, path: '@gympass/yoga-icons' },
    { name: YogaComponents, path: '@gympass/yoga' },
    { name: NativeComponents, path: 'react-native' },
  ];

  const imports = type === 'highlight' ? [] : buildImportString(packages);
  const dependencies = Array.from(packages, ({ path }) => path);
  const codeblockData = {
    center,
    code,
    dependencies,
    imports,
    state,
    theme,
  };

  const CodeBlockComponent = {
    reactLive: ReactLive,
    highlight: PrismHighlight,
    expo: SnackEmbed,
  }[type];

  return (
    <CodeBlockContext.Provider value={codeblockData}>
      <CodeBlockComponent />
    </CodeBlockContext.Provider>
  );
};

CodeBlock.propTypes = {
  type: oneOf(['reactLive', 'highlight', 'expo']),
  children: node.isRequired,
  center: bool,
  state: bool,
};

CodeBlock.defaultProps = {
  type: 'reactLive',
  center: true,
  state: false,
};

export default CodeBlock;
