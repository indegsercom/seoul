# 디자이너에게 버전관리가 필요한 이유

Aurumplanet에서 함께 일했던 개발자들은 자신들의 작업 환경을 개선하기 위해 [Trello](https://trello.com/en), [Atlassian](https://www.atlassian.com/) 등 다양한 서비스를 공부하고 사용하는 데에 적극적이었습니다. 그 중 가장 제 눈에 띄었던 것은 [Git](https://en.wikipedia.org/wiki/Git)과 [GitHub](https://github.com/)이었습니다.

프로그래밍처럼 디자인 역시 끝없는 수정-피드백의 과정을 거칩니다. 버전 관리는 디자이너에게도 필수적이지만 대개 "최종", "진짜최종" 같은 수준에 머뭅니다. 지금은 대부분의 디자인 편집 툴이 자체 버전관리 기능을 탑재하고 [Abstract](http://abstract.com/)같은 디자인 버전관리 서비스가 있지만 2015년 당시엔 버전 관리라는 개념 자체가 디자이너들에겐 생소했습니다. 2년 동안 저는 개발자들이 Git으로 버전을 관리하는 것을 옆에서 봐왔습니다. 사본 제목을 고민할 필요도 없고 작업 내용을 동료와 주고받기 위해 몇 개의 명령어만 외우면 되었습니다.

처음으로 직접 서비스를 만들고 싶었습니다. 디자이너를 위한 버전관리 서비스. 단순하게 대학 동기들이 버전 관리를 하지않고 있기 때문은 아니었습니다. **체계적이고 편안한 환경은 좋은 결과물을 만들어내는 데에 필수이고, 디자이너의 작업환경을 개선하는 데에는 디자이너가 적극적이야 한다**는 생각에 2015년 8월, Git을 기반으로한 디자인 버전관리 소프트웨어를 만들기 시작했습니다.

# 디자이너를 위한 Git GUI

![indegs 1.0 홍보 이미지. (2016)](https://user-images.githubusercontent.com/12758512/82827994-1f6d9580-9eeb-11ea-92cc-d5ba7aaac22c.jpg)

Indegs는 [Github Desktop](https://desktop.github.com/), [Sourcetree](https://www.sourcetreeapp.com/)같은 Git GUI와 구조에 있어 매우 유사하지만 기록을 시각화하는 데에 있어서 디자이너에 특화되어 있습니다. 우선, 디자이너의 작업은 글로 설명하기 어렵습니다. 그러므로 `git commit`의 내용이 아닌 해당 버전의 미리보기 이미지가 제일 먼저 보여야합니다. 또한 개발자의 작업과는 달리 디자인 작업은 횡적입니다. 디자이너는 시안을 만듭니다. 시안은 모두가 정답이 될 가능성을 가진 중간 작업물로서, 때로 시안은 컨셉 차원에서 혹은 몇 픽셀의 수정을 통해서 생성되기도 합니다. 디자이너 역시 어떤 시안이 마지막에 가장 좋은 결과물로 탄생할지 알지 못하므로 디자인 작업은 무한히 생성되는 시안들과, 그 시안 간의 무한한 횟수의 비교를 거칩니다. Indegs는 버전을 미리보기 이미지로 보여주며, 특정 버전들을 선택해 한 눈에 비교할 수 있는 기능을 탑재하고 있습니다. `git commit`과 `git diff`의 디자인 버전입니다.

이를 위해 Indegs는 디자이너가 포토샵 파일을 수정 후 저장할 때마다 자동으로 `git commit`을 실행하고 `imagemagick`으로 썸네일을 생성하도록 구현되었습니다. 하나의 소스코드로 여러 운영체제를 지원하며, 웹 기술을 기반으로 했기에 배우기에 용이했던 [Electron](https://electronjs.org/)을 사용했으며 [React](https://reactjs.org)로 화면을 제작했습니다.

[[ youtube url="https://www.youtube.com/watch?v=ldecaFq3i3s" alt="Indegs 1.0 시연 영상. (2016)" ]]
