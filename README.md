\# gitflow-demo



Proyecto de demostración del flujo de trabajo GitFlow con GitHub Actions.



\## Estrategia de ramas: GitFlow



| Rama | Propósito | Sale de | Merge a |

|------|-----------|---------|---------|

| `main` | Código en producción | — | — |

| `develop` | Integración de features | `main` | `main` (release) |

| `feature/\*` | Nuevas funcionalidades | `develop` | `develop` |

| `hotfix/\*` | Parches urgentes | `main` | `main` + `develop` |



\## Convención de commits



Seguimos el estándar Conventional Commits:

| Tipo | Cuándo usarlo |

|------|---------------|

| `feat` | Nueva funcionalidad |

| `fix` | Corrección de bug |

| `test` | Agregar o modificar tests |

| `docs` | Solo documentación |

| `refactor` | Refactorización sin cambio funcional |

| `chore` | Tareas de mantenimiento |



Ejemplos:

\- `feat(auth): add JWT login endpoint`

\- `fix(dashboard): prevent null reference on empty userId`



\## Naming de ramas



\- `feature/nombre-descriptivo-en-kebab-case`

\- `hotfix/descripcion-del-bug`

\- `release/v1.2.0`



\## Proceso de Pull Requests



1\. Rama actualizada con `develop` antes de abrir el PR

2\. Al menos 1 revisión aprobada requerida

3\. CI en verde (tests + lint)

4\. \*\*Squash and merge\*\* para features

5\. \*\*Merge commit\*\* para hotfixes

6\. Eliminar rama después del merge



\## Proceso de revisión



\- Revisar lógica, no estilo (el linter lo hace)

\- Comentarios con sugerencias, no órdenes

\- Aprobar solo si entiendes el cambio completo

