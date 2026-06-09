import { TestBed } from '@angular/core/testing';

import { PadawanTopics } from './padawan-topics';

describe('PadawanTopics', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadawanTopics],
    }).compileComponents();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('shows the focused mentor transmission before the first generation', () => {
    vi.useFakeTimers();

    const fixture = TestBed.createComponent(PadawanTopics);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const activeTransmission = () =>
      compiled.querySelector('.mentor-bubble--active')?.textContent ?? '';

    expect(activeTransmission()).toContain("Generate today's 3 random topics");
    expect(compiled.querySelector('.topic-panel')).toBeNull();
    expect(compiled.querySelector('.holocron-action')).toBeNull();
    expect(compiled.querySelectorAll('.topic-card')).toHaveLength(0);

    vi.advanceTimersByTime(8200);
    fixture.detectChanges();

    expect(activeTransmission()).toContain('Press the Holocron, Padawan.');
    expect(compiled.querySelector('.holocron-action')).not.toBeNull();
  });

  it('generates exactly 3 visible topic cards', () => {
    vi.useFakeTimers();

    const fixture = TestBed.createComponent(PadawanTopics);
    fixture.detectChanges();

    vi.advanceTimersByTime(8200);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.holocron-action') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Opening the Holocron');

    vi.advanceTimersByTime(760);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.topic-card')).toHaveLength(3);
    expect(compiled.textContent).toContain('The Force has selected these topics...');
    expect(compiled.querySelector('.mentor-bubble--active')).toBeNull();
    expect(compiled.textContent).not.toContain('Copy topics');
  });
});
