# 이전/다음 링크 {#prev-next-links}

문서 하단에 표시되는 이전 페이지와 다음 페이지의 텍스트와 링크를 커스터마이징 할 수 있습니다. 사이드바에 있는 텍스트와 다른 텍스트를 원할 경우 유용합니다. 또한 푸터를 비활성화하거나 사이드바에 포함되지 않은 페이지로 링크할 때도 유용할 수 있습니다.

## prev

- 타입: `string | false | { text?: string; link?: string }`

- 세부 사항:

  이전 페이지로 가는 링크에 표시할 텍스트/링크를 지정합니다. 전문에서 이 항목을 설정하지 않으면, 사이드바 구성에서 텍스트/링크가 유추됩니다.

- 예제:

  - 텍스트만 커스터마이징하려면:

    ```yaml
    ---
    prev: '시작하기 | 마크다운'
    ---
    ```

  - 텍스트와 링크를 모두 커스터마이즈하려면:

    ```yaml
    ---
    prev:
      text: '마크다운 확장 기능'
      link: '/guide/markdown'
    ---
    ```

  - 이전 페이지를 숨기려면:

    ```yaml
    ---
    prev: false
    ---
    ```

## next

`prev`와 동일하지만, 다음 페이지에 대한 설정입니다.