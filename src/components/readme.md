# Atomic Design Methodology
``Metodologia przechowywania komponentów w odpowiednich folderach w zależności od ich złożoności``
## Atoms 
W folderze ``atoms`` przechowujemy najmniejsze komponenty z podstawową złożonością, czyli niezawierające innych komponentów z projektu.
## Molecules
W folderze ``molecules`` składujemy średniej wielkości komponenty i komponenty zawierające komponenty z folderu ``atoms``.
## Organisms
W folderze ``organisms`` znajdują się największe komponenty, złożone z wielu komponentów atomowych czy molekularnych, a nawet innych organizmów

Ogólna zasada tej metodologii to ``organisms < molecules < atoms``