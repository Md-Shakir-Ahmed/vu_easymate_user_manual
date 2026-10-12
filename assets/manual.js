/**
 * EasyMate ERP — User Manual Client Scripts
 * Provides theme toggling, live scrollspy, global search modal, copy-to-clipboard, and mobile drawer.
 */

(function () {
  'use strict';

  // 1. Theme Toggle
  const themeStorageKey = 'easymate_manual_theme';
  const htmlEl = document.documentElement;

  function initTheme() {
    const saved = localStorage.getItem(themeStorageKey);
    if (saved) {
      htmlEl.setAttribute('data-theme', saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      htmlEl.setAttribute('data-theme', 'dark');
    } else {
      htmlEl.setAttribute('data-theme', 'light');
    }
    updateThemeIcon();
  }

  function toggleTheme() {
    const current = htmlEl.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem(themeStorageKey, next);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> Light'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> Dark';
  }

  initTheme();

  document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // 2. Mobile Nav Toggle
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const sidebar = document.querySelector('.docs-sidebar');
    if (mobileToggle && sidebar) {
      mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      });
    }

    // 3. Print Button
    const printBtns = document.querySelectorAll('.print-btn-action');
    printBtns.forEach(btn => {
      btn.addEventListener('click', () => window.print());
    });

    // 4. Copy Code / Diagram Buttons
    const copyBtns = document.querySelectorAll('.code-copy-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const wrapper = btn.closest('.code-wrapper');
        if (!wrapper) return;
        const pre = wrapper.querySelector('pre');
        if (!pre) return;
        const text = pre.innerText || pre.textContent;
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = '✓ Copied!';
          btn.style.color = '#10b981';
          setTimeout(() => {
            btn.innerHTML = original;
            btn.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Copy failed:', err);
        });
      });
    });

    // 5. Sidebar Filter Input
    const filterInput = document.getElementById('sidebar-filter-input');
    if (filterInput) {
      filterInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.sidebar-nav-item');
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          item.style.display = text.includes(query) ? '' : 'none';
        });
      });
    }

    // 6. ScrollSpy for Right TOC
    const tocLinks = document.querySelectorAll('.toc-link');
    if (tocLinks.length > 0) {
      const headings = [];
      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.getElementById(href.substring(1));
          if (target) {
            headings.push({ el: target, link: link });
          }
        }
      });

      function onScroll() {
        const scrollPos = window.scrollY + 120;
        let currentHeading = null;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].el.offsetTop <= scrollPos) {
            currentHeading = headings[i];
          } else {
            break;
          }
        }
        tocLinks.forEach(l => l.classList.remove('active'));
        if (currentHeading) {
          currentHeading.link.classList.add('active');
        } else if (tocLinks[0]) {
          tocLinks[0].classList.add('active');
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // 7. Global Search Modal
    const searchBackdrop = document.getElementById('search-modal-backdrop');
    const searchInput = document.getElementById('search-modal-input');
    const searchResults = document.getElementById('search-modal-results');
    const searchTriggers = document.querySelectorAll('.search-trigger');
    const closeSearchBtn = document.getElementById('search-modal-close');

    function openSearch() {
      if (!searchBackdrop) return;
      searchBackdrop.classList.add('active');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        renderSearchResults('');
      }
    }

    function closeSearch() {
      if (!searchBackdrop) return;
      searchBackdrop.classList.remove('active');
    }

    searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
    if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
    if (searchBackdrop) {
      searchBackdrop.addEventListener('click', (e) => {
        if (e.target === searchBackdrop) closeSearch();
      });
    }

    // Keyboard Shortcuts: Ctrl+K or /
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape') {
        closeSearch();
      }
    });

    let selectedIndex = -1;

    function renderSearchResults(query) {
      if (!searchResults) return;
      const index = window.SEARCH_INDEX || [];
      const q = query.trim().toLowerCase();

      if (!q) {
        searchResults.innerHTML = `
          <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 13px;">
            Type keywords to search across all EasyMate ERP manual chapters, modules, and workflows...
          </div>
        `;
        return;
      }

      const words = q.split(/\s+/).filter(Boolean);
      const matches = [];

      index.forEach(item => {
        const titleMatch = words.every(w => item.title.toLowerCase().includes(w));
        const headingMatch = words.every(w => item.heading.toLowerCase().includes(w));
        const contentMatch = words.every(w => item.content.toLowerCase().includes(w));

        let score = 0;
        if (titleMatch) score += 10;
        if (headingMatch) score += 6;
        if (contentMatch) score += 3;

        if (score > 0) {
          matches.push({ ...item, score });
        }
      });

      matches.sort((a, b) => b.score - a.score);
      const topMatches = matches.slice(0, 25);

      if (topMatches.length === 0) {
        searchResults.innerHTML = `
          <div style="padding: 32px 16px; text-align: center; color: var(--text-muted); font-size: 13px;">
            No documentation sections found matching "<strong>${escapeHtml(query)}</strong>".
          </div>
        `;
        return;
      }

      selectedIndex = 0;
      let html = '';
      topMatches.forEach((m, idx) => {
        const snippet = highlightSnippet(m.content, words);
        const selClass = idx === 0 ? 'selected' : '';
        html += `
          <a class="search-result-item ${selClass}" href="${m.url}" data-index="${idx}">
            <div class="search-result-chapter">${escapeHtml(m.chapter)}</div>
            <div class="search-result-heading">${escapeHtml(m.heading || m.title)}</div>
            <div class="search-result-snippet">${snippet}</div>
          </a>
        `;
      });
      searchResults.innerHTML = html;
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderSearchResults(e.target.value);
      });

      searchInput.addEventListener('keydown', (e) => {
        const items = searchResults ? searchResults.querySelectorAll('.search-result-item') : [];
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedIndex = (selectedIndex + 1) % items.length;
          updateSelected(items);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedIndex = (selectedIndex - 1 + items.length) % items.length;
          updateSelected(items);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < items.length) {
            items[selectedIndex].click();
          }
        }
      });
    }

    function updateSelected(items) {
      items.forEach((it, i) => {
        if (i === selectedIndex) {
          it.classList.add('selected');
          it.scrollIntoView({ block: 'nearest' });
        } else {
          it.classList.remove('selected');
        }
      });
    }

    function escapeHtml(str) {
      return (str || '').replace(/[&<>"']/g, function (m) {
        return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
      });
    }

    function highlightSnippet(text, words) {
      if (!text) return '';
      let snippet = text;
      const lower = text.toLowerCase();
      let firstIndex = -1;
      words.forEach(w => {
        const pos = lower.indexOf(w);
        if (pos !== -1 && (firstIndex === -1 || pos < firstIndex)) {
          firstIndex = pos;
        }
      });

      if (firstIndex > 40) {
        snippet = '...' + text.substring(firstIndex - 30, firstIndex + 140) + '...';
      } else {
        snippet = text.substring(0, 160) + (text.length > 160 ? '...' : '');
      }

      snippet = escapeHtml(snippet);
      words.forEach(w => {
        const regex = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        snippet = snippet.replace(regex, '<mark>$1</mark>');
      });
      return snippet;
    }
  });
})();
